import { HttpPostClientSpy } from '@/data/mocks/mockHttpClient';
import { RemoteAuthentication } from './remoteAuthentication';

import { faker } from '@faker-js/faker';
import { mockAuthentication } from '@/domain/mocks/mockAuthentication';

const makeSut = (url = 'any_url') => {
  const httpPostClientSpy = new HttpPostClientSpy();
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
});
