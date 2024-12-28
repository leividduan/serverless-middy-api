import { IController } from '../types/IController';
import { IHttpRequest, IHttpResponse } from '../types/IHttp';

export class UpdateUserController implements IController {
  async handler({ params }: IHttpRequest<undefined>): Promise<IHttpResponse> {
    return {
      statusCode: 200,
      body: {
        userId: params?.userId
      }
    };
  }
}
