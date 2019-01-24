import { Observable } from 'rxjs';

export interface UploadSessionFileInfo {
  fileName: string;
  chunkSizeInBytes: number;
  totalNumberOfChunks: number;
  fileSizeInBytes: number;
}

export interface UploadSessionFileInfoList {
  data: Array<UploadSessionFileInfo>;
}

export interface UploadSessionFileChunkRangeList {
  data: Array<UploadSessionFileChunkRange>;
}

export interface UploadSessionFileChunkRange {
  begin: number;
  end: number;
}

export interface StartUploadSessionParamsFile {
  fileName: string;
  sizeInBytes: number;
}

export interface StartUploadSessionParams {
  manifest: Array<StartUploadSessionParamsFile>;
}

export type FileProgressObservable = Observable<FileProgress>;

export interface UploadErrorJSON {
  message: string | undefined;
  code: number;
}

export class UploadError extends Error {

  constructor(private _json: UploadErrorJSON) {
    super(_json.message);
  }

  get message(): string {
    return this._json.message || 'no error message available';
  }

  get code(): number {
    return this._json.code;
  }
}

export interface FileProgress {
  name: string;
  progressPercentage: number;
}
