import { makeUploadController } from '../factories/makeUploadController';
import { makeHandler } from '../middy/makeHandler';

export const handler = makeHandler(makeUploadController());
