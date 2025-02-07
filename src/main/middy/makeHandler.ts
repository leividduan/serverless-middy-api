import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpMultipartBodyParser from '@middy/http-multipart-body-parser';
import httpResponseSerializer from '@middy/http-response-serializer';
import { z } from 'zod';
import { IController } from '../../application/types/IController';
import { sanitizeObject } from '../utils/sanitizeObject';
import { errorHandler } from './middlewares/errorHandler';
import { zodHandler } from './middlewares/zodHandler';

export function makeHandler(controller: IController<any>, schema?: z.AnyZodObject) {
  return middy()
    .use(httpJsonBodyParser({ disableContentTypeError: true }))
    .use(httpMultipartBodyParser({ disableContentTypeError: true }))
    .use(errorHandler())
    .use(httpResponseSerializer({
      defaultContentType: 'application/json',
      serializers: [
        {
          regex: /^application\/json$/,
          serializer: ({ body }) => JSON.stringify(body)
        }
      ]
    }))
    .use(zodHandler({
      schema
    }))
    .handler(async (event) => {
      return controller.handler({
        body: event.body,
        headers: sanitizeObject(event.headers ?? {}),
        params: event.pathParameters ?? {},
        queryParams: event.queryStringParameters ?? {}
      });
    });
}
