import { HttpPostClient } from '../protocols/http/http-post-client';

export class HttpPostClentSpy implements HttpPostClient {
  url?: string;
  async post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}
