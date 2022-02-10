/**
 * Object Storage s3 bucket info JSON
 */
export interface S3BucketJson {
  name: string;
  usage_kib: number;
  num_objects: number;
  creation_time: number;
}
