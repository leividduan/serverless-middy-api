import { MiddlewareObj } from '@middy/core';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { z } from 'zod';
import { HttpError } from '../../../application/errors/HttpError';
import formatZodIssues from '../../utils/formatZodIssues';

interface IZodHandler {
  schema?: z.AnyZodObject
}

export function zodHandler({ schema }: IZodHandler): MiddlewareObj<APIGatewayProxyEventV2> {
  return {
    before: (request) => {
      if (!schema) {
        return;
      }

      const result = schema.safeParse(request.event.body);
      if (!result.success) {
        const issues = formatZodIssues(result.error.issues);
        throw new HttpError(400, { errors: issues });
      }
    }
  };
}
