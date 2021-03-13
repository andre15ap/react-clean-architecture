import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClient } from '../../protocols/http/http-post-client';

describe('RemoteAuthentication', () => {
  test('Shold call HttpPostClient with correct URL', async () => {
    class HttpPostClentSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClentSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
