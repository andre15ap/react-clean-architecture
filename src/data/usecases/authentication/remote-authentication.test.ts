import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClentSpy } from '../../test/mock-http-client';

describe('RemoteAuthentication', () => {
  test('Shold call HttpPostClient with correct URL', async () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClentSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
