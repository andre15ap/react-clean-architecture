import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClentSpy } from '../../test/mock-http-client';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClentSpy;
};

const makeSut = (url = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClentSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('Shold call HttpPostClient with correct URL', async () => {
    const url = 'other_url';
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
