import { SuccessResponse } from '@sdks/types-shared';

type RequestOptions = RequestInit & {
  onError?: 'throwOriginal' | 'body'
};

export type Options = Omit<RequestOptions, 'body'> & {
  body?: FormData | { [k: string]: any },
}

/**
 * This client runner utilize fetch API for working with HTTP request.
 */
export interface ClientRunner {
  readonly API_BASE_URL: string;
  send<D>(input: RequestInfo, options?: Options): Promise<SuccessResponse<D>>;
}

type Headers = { [key: string]: any }

type DefaultRunnerOpts = {
  API_BASE_URL: string;
  headers?: (headers: Headers) => Headers;
}

/**
 * This client runner utilize fetch API for working with HTTP request.
 */
export class DefaultRunner implements ClientRunner {
  constructor(private readonly opts: DefaultRunnerOpts) { }

  get API_BASE_URL() {
    return this.opts.API_BASE_URL;
  }

  async send<Data>(input: RequestInfo, options?: Options): Promise<SuccessResponse<Data>> {
    const response = await fetch(...this.initParams(input, options));
    let body: SuccessResponse<Data> = { data: null as Data };

    try {
      const text = await response.text();
      body = text && JSON.parse(text);
    } catch (err) { throw err; }

    if (response.status > 399) {
      throw body;
    }

    return body;
  }

  private initParams(input: RequestInfo, options?: Options):
    [RequestInfo, RequestInit | undefined] {
    const isFormData = typeof FormData !== 'undefined' && options?.body instanceof FormData;

    const rawHeaders: Headers = {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      ...options?.headers,
    };

    const headers = this.opts.headers
      ? this.opts.headers(rawHeaders)
      : rawHeaders;

    if (isFormData) {
      delete headers['Content-Type'];
    }

    const newOptions: RequestOptions = {
      ...options,
      headers,
      body: processBody(headers['Content-Type'], options?.body),
    };

    return [input, newOptions];
  }
}

function processBody(contentType: string, body?: any) {
  if (contentType === 'application/json')
    return JSON.stringify(body);

  return body;
}
