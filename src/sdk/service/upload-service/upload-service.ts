import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Iland } from '../../iland';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  FileProgress,
  FileProgressObservable,
  StartUploadSessionParams,
  UploadError,
  UploadErrorJSON,
  UploadSessionFileChunkRangeList,
  UploadSessionFileInfo,
  UploadSessionFileInfoList
} from './model';
import { Logger } from '../../logger/logger';

/**
 * Upload Service provides a wrapper for the iland upload engine to allow robust, resumable uploads of large files.
 */
export abstract class UploadService {

  private static _uploadAxios: AxiosInstance;

  private static getHTTPClient(): AxiosInstance {
    if (!UploadService._uploadAxios) {
      UploadService._uploadAxios = axios.create();
      UploadService._uploadAxios.interceptors.request.use(async(config: AxiosRequestConfig) => {
        return Iland.getAuthProvider().getToken().then((token) => {
          config.headers['Authorization'] = 'Bearer ' + token;
          return config;
        });
      });
      UploadService._uploadAxios.interceptors.response.use(undefined, async(reason: AxiosError) => {
        let error: UploadErrorJSON;
        const response = reason.response;
        if (!response) {
          error = {
            code: 1000,
            message: `failed to connect to ${reason.config.url}`
          };
        } else {
          error = response.data as UploadErrorJSON;
        }
        throw new UploadError(error);
      });
    }
    return UploadService._uploadAxios;
  }

  /**
   * Start an upload session.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @param params the invocation params for the session
   * @returns a promise that resolves when the session has started
   */
  private static async startUploadSession(host: string, sessionID: string, params: StartUploadSessionParams):
      Promise<any> {
    const client = this.getHTTPClient();
    return client.post(`${host}/v1/sessions/${sessionID}/actions/start`, params);
  }

  /**
   * Lists info about the files in an upload session.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @returns a promise that resolves with upload session file info list
   */
  static async listSessionFileInfo(host: string, sessionID: string): Promise<UploadSessionFileInfoList> {
    const client = this.getHTTPClient();
    return client.get(`${host}/v1/sessions/${sessionID}/files`).then((resp) => {
      return resp.data as UploadSessionFileInfoList;
    });
  }

  /**
   * Lists the missing file chunks for an upload session.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @param fileName the name of the file within the upload session
   * @returns a promise that resolves with upload session missing file chunk range list
   */
  static async listMissingFileChunks(host: string, sessionID: string, fileName: string):
      Promise<UploadSessionFileChunkRangeList> {
    const client = this.getHTTPClient();
    return client.get(`${host}/v1/sessions/${sessionID}/files/${fileName}/chunks`, {
      params: {
        filter: 'Missing'
      }
    }).then((resp) => {
      return resp.data as UploadSessionFileChunkRangeList;
    });
  }

  /**
   * Gets info for a specific file within an upload session.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @param fileName the name of the file within the upload session
   * @returns a promise that resolves with the file info
   */
  static async getSessionFileInfo(host: string, sessionID: string, fileName: string): Promise<UploadSessionFileInfo> {
    const client = this.getHTTPClient();
    return client.get(`${host}/v1/sessions/${sessionID}/files/${fileName}`).then((resp) => {
      return resp.data as UploadSessionFileInfo;
    });
  }

  /**
   * Uploads a file chunk.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @param fileName the name of the file
   * @param chunkNumber the chunk number
   * @param chunk the chunk data
   * @returns a promise that resolves if the chunk upload is successful
   */
  private static async uploadFileChunk(host: string, sessionID: string, fileName: string, chunkNumber: number,
                                       chunk: Chunk): Promise<any> {
    const formData = new FormData();
    formData.set('chunk', chunk.bytes);
    formData.set('size', chunk.size.toString());
    const client = this.getHTTPClient();
    return client
        .post(`${host}/v1/sessions/${sessionID}/files/${fileName}/chunks/${chunk.chunkNumber}`, formData);
  }

  /**
   * Asserts that an upload session has completed.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @returns a promise that resolves when the session is successfully marked complete
   */
  private static async assertSessionComplete(host: string, sessionID: string): Promise<any> {
    const client = this.getHTTPClient();
    return client.post(`${host}/v1/sessions/${sessionID}/actions/complete`);
  }

  /**
   * Asserts that an upload session file has completed.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @param fileName the name of the file
   * @returns a promise that resolves when the file upload is successfully marked complete
   */
  private static async assertFileUploadComplete(host: string, sessionID: string, fileName: string): Promise<any> {
    const client = this.getHTTPClient();
    return client
        .post(`${host}/v1/sessions/${sessionID}/files/${fileName}/actions/complete`);
  }

  /**
   * Uploads multiple files to an upload session simultaneously.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @param files the list of files to upload
   * @param logger an optional logger to enable console messages for internal process details
   * @returns an observable that emits events to notify consumers of upload progress for each file
   */
  static uploadFiles(host: string, sessionID: string, files: Array<File>, logger?: Logger):
      FileProgressObservable {
    const progressSubject = new Subject<FileProgress>();
    // get the session file list. if I don't have the file size for any, start the session. If I don't have all of the
    // needed files, throw an error
    this.startUploadSession(host, sessionID, {
      manifest: files.map(it => {
        return {
          fileName: it.name,
          sizeInBytes: it.size
        };
      })
    }).then(undefined, async(err) => {
      if (err.message.indexOf('session is already started') >= 0) {
        // if the error is caused by the fact that the session is already started, we ignore it
        return Promise.resolve();
      } else {
        return Promise.reject(err);
      }
    }).then(() => {
      const promises = [];
      for (const f of files) {
        const fileSubject = new Subject<number>();
        promises.push(this.uploadFile(host, sessionID, f, fileSubject));
        fileSubject.subscribe(v => {
          progressSubject.next({
            name: f.name,
            progressPercentage: v
          });
        });
      }
      const client = this.getHTTPClient();
      const completeSessionFn = async() => {
        return this.assertSessionComplete(host, sessionID).then(undefined, async(err) => {
          if (logger) {
            logger.error(`${err.code}: failed to assert session '${sessionID}' complete,
              retrying in 5s: ${err.message}`);
          }
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(completeSessionFn());
            }, 5000);
          });
        });
      };
      /* tslint:disable-next-line */
      Promise.all(promises).then(() => {
        return completeSessionFn();
      }).then(() => {
        return progressSubject.complete();
      });
    }, err => {
      progressSubject.error(err);
    });
    return progressSubject;
  }

  /**
   * Uploads an individual file.
   * @param host the upload session host
   * @param sessionID the upload session UUID
   * @param file the file to upload
   * @param progressSink an optional subject to be used as a sink for progress updates
   * @param logger an optional logger to enable console messages for internal process details
   * @param parallelism number of chunks to upload simulaneously
   * @returns a promise that resolves when the file upload is complete
   */
  private static async uploadFile(host: string, sessionID: string, file: File,
                                  progressSink?: Subject<number>, logger?: Logger,
                                  parallelism: number = 1): Promise<any> {
    const self = this;
    const fileInfo = await UploadService.getSessionFileInfo(host, sessionID, file.name);
    const missingFileChunks = await UploadService.listMissingFileChunks(host, sessionID, file.name);
    const subject = new Subject<ChunkUploadResult>();
    let activeCount = 0;
    return new Promise<any>(async(resolve) => {
      const uploadChunk = async(chunk: Chunk): Promise<ChunkUploadResult> => {
        activeCount++;
        return this.uploadFileChunk(host, sessionID, file.name, chunk.chunkNumber, chunk)
            .then(() => {
              activeCount--;
              const result = {
                error: null,
                success: true,
                chunk: chunk
              };
              subject.next(result);
              return result;
            }, err => {
              activeCount--;
              const result = {
                error: err,
                success: false,
                chunk: chunk
              };
              subject.next(result);
              return result;
            });
      };
      let missingChunksIdx = 0;
      let nextChunk = missingFileChunks.data.length > 0 ? missingFileChunks.data[missingChunksIdx].begin :
          null;
      function getNextChunk(): Chunk | null {
        if (nextChunk === null) {
          return null;
        }
        const firstByte = (nextChunk - 1) * fileInfo.chunkSizeInBytes;
        let lastByte = firstByte + fileInfo.chunkSizeInBytes;
        if (lastByte > fileInfo.fileSizeInBytes) {
          lastByte = fileInfo.fileSizeInBytes;
        }
        const next = {
          chunkNumber: nextChunk,
          size: lastByte - firstByte,
          bytes: file.slice(firstByte, lastByte)
        };
        nextChunk++;
        if (nextChunk > missingFileChunks.data[missingChunksIdx].end) {
          if (missingFileChunks.data.length > missingChunksIdx + 1) {
            missingChunksIdx++;
            nextChunk = missingFileChunks.data[missingChunksIdx].begin;
          } else {
            nextChunk = null;
          }
        }
        return next;
      }

      async function uploadNextChunk(): Promise<ChunkUploadResult | null> {
        const nextChunk = getNextChunk();
        if (nextChunk) {
          return uploadChunk(nextChunk);
        } else if (activeCount === 0) {
          // assert file upload complete
          return self.assertFileUploadComplete(host, sessionID, file.name).then(async() => {
            subject.complete();
            resolve();
            return Promise.resolve(null);
          }, async(err: UploadError) => {
            // try again, after a timeout
            if (logger) {
              logger.error(`${err.code}: failed to assert file '${file.name}' upload complete,
              retrying in 5s: ${err.message}`);
            }
            return new Promise<ChunkUploadResult | null>(resolve => {
              setTimeout(() => {
                resolve(uploadNextChunk());
              }, 5000);
            });
          });
        } else {
          return Promise.resolve(null);
        }
      }

      for (let i = 0; i < parallelism; i++) {
        /* tslint:disable-next-line */
        uploadNextChunk();
      }
      subject.subscribe(uploadResult => {
        const timeout = 30;
        if (!uploadResult.success) {
          if (logger) {
            logger.error(`error uploading chunk ${uploadResult.chunk.chunkNumber} for ${file.name}:
            ${uploadResult.error}. retrying after ${timeout} seconds`);
          }
          setTimeout(() => {
            /* tslint:disable-next-line */
            uploadChunk(uploadResult.chunk);
          }, timeout * 1000);
        } else {
          /* tslint:disable-next-line */
          uploadNextChunk();
        }
      });
      if (progressSink) {
        let successCount = fileInfo.totalNumberOfChunks -
            missingFileChunks.data.map(it => it.end + 1 - it.begin)
            .reduce((p, c) => p + c, 0);
        if (successCount > 0) {
          progressSink.next((successCount / fileInfo.totalNumberOfChunks) * 100);
        }
        subject.pipe(filter(it => it.success)).pipe(map(() => {
          successCount++;
          return (successCount / fileInfo.totalNumberOfChunks) * 100;
        })).subscribe(it => progressSink.next(it));
      }
    });
  }

}

// INTERNAL MODEL

interface ChunkUploadResult {
  chunk: Chunk;
  success: boolean;
  error: string | null;
}

interface Chunk {
  bytes: Blob;
  chunkNumber: number;
  size: number;
}
