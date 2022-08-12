import { HttpPostClient } from '@/data/protocols/http/HttpPostClient';
import { RemoteAuthentication } from './remoteAuthentication';

class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}

const makeSut = () => {
  const url = 'any_url';
  const httpPostClientSpy = new HttpPostClientSpy();
  const remoteAuthentication = new RemoteAuthentication(url, httpPostClientSpy);

  return { httpPostClientSpy, remoteAuthentication, url };
};

describe('RemoteAuthentication', () => {
  it('Should call HttpPostClient with correct URL', () => {
    const { httpPostClientSpy, remoteAuthentication: sut, url } = makeSut();
    sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
