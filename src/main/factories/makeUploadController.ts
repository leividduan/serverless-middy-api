import { s3Client } from '../../application/clients/s3Client';
import { UploadController } from '../../application/controllers/UploadController';

export function makeUploadController() {
  return new UploadController(s3Client);
}
