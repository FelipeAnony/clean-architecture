import { HttpPostClientSpy } from '@/data/mocks/mockHttpClient';
import { HttpStatusCode } from '@/data/protocols/http/httpResponse';
import { RemoteAuthentication } from './remoteAuthentication';

import { mockAuthentication } from '@/domain/mocks/mockAuthentication';
import { InvalidCredentialsError } from '@/domain/errors/invalidCredentialsError';

import { faker } from '@faker-js/faker';
import { UnexpectedError } from '@/domain/errors/unexpectedError';
import { AuthenticationParams } from '@/domain/usecases/authentication';
import { AccountModel } from '@/domain/models/accountModels';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>;
};

const makeSut = (url = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AuthenticationParams,
    AccountModel
  >();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return { httpPostClientSpy, sut };
};

describe('RemoteAuthentication', () => {
  it('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { httpPostClientSpy, sut } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('Should call HttpPostClient with correct Body', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    const authParams = mockAuthentication();
    await sut.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });

  it('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };

    const authParams = mockAuthentication();
    const promise = sut.auth(authParams);
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  it('Should throw unexpected error if HttpPostClient returns 400', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };

    const authParams = mockAuthentication();
    const promise = sut.auth(authParams);
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('Should throw unexpected error if HttpPostClient returns 404', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const authParams = mockAuthentication();
    const promise = sut.auth(authParams);
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('Should throw unexpected error if HttpPostClient returns 500', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const authParams = mockAuthentication();
    const promise = sut.auth(authParams);
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
