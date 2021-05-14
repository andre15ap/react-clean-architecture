import { HttpResponse } from '@/data/protocols/http/http-post-response';

export type HttpPostParams = {
  url: string;
  body?: any;
  response?: HttpResponse;
};

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}
