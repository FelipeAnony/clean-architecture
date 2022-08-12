import { HttpPostClientSpy } from '@/data/mocks/mockHttpClient';
import { RemoteAuthentication } from './remoteAuthentication';

const makeSut = (url = 'any_url') => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return { httpPostClientSpy, sut };
};

describe('RemoteAuthentication', () => {
  it('Should call HttpPostClient with correct URL', () => {
    const url = 'other_url';
    const { httpPostClientSpy, sut } = makeSut(url);
    sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
