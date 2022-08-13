import { AuthenticationParams } from '../usecases/authentication';

import { faker } from '@faker-js/faker';
import { AccountModel } from '../models/accountModels';

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.alphaNumeric(),
});
