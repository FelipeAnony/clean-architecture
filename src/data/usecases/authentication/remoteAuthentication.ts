import { HttpPostClient } from '@/data/protocols/http/HttpPostClient';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post({ url: this.url });
  }
}
