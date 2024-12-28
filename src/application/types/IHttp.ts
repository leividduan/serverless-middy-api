export interface IHttpRequest<TBody extends Record<string, any> | undefined> {
  body: TBody
  headers?: Record<string, string | undefined>
  params?: Record<string, string | undefined>
  queryParams?: Record<string, string | undefined>
}

export interface IHttpResponse {
  statusCode: number
  body?: Record<string, any>
  headers?: Record<string, string>
}
