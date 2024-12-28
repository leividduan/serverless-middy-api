import { makeListUsersController } from '../factories/makeListUsersController';
import { makeUpdateUserController } from '../factories/makeUpdateUserController';
import { makeHandler } from '../middy/makeHandler';
import { makeRoutesHandler } from '../middy/makeRoutesHandler';

export const handler = makeRoutesHandler([
  {
    path: '/users',
    method: 'GET',
    handler: makeHandler(makeListUsersController())
  },
  {
    path: '/users/{userId}',
    method: 'PUT',
    handler: makeHandler(makeUpdateUserController())
  }
]);
