import {
  HttpPostClient,
  HttpPostParams,
} from '../protocols/http/httpPostClient';
import { HttpResponse, HttpStatusCode } from '../protocols/http/httpResponse';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: any;
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent,
  };

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;

    return Promise.resolve(this.response);
  }
}
