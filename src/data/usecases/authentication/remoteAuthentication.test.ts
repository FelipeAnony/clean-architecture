import { HttpPostClientSpy } from '@/data/mocks';
import { HttpStatusCode } from '@/data/protocols/http';
import { RemoteAuthentication } from './remoteAuthentication';

import { mockAccountModel, mockAuthentication } from '@/domain/mocks';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { AuthenticationParams } from '@/domain/usecases';
import { AccountModel } from '@/domain/models';

import { faker } from '@faker-js/faker';

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

  it('Should return an AccountModel if HttpPostClient returns 200', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    const httpResult = mockAccountModel();

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const account = await sut.auth(mockAuthentication());
    expect(account).toEqual(httpResult);
  });
});
