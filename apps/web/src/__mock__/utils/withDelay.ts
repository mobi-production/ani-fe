import { DefaultBodyType, HttpResponseResolver, PathParams, delay } from 'msw'

/**
 * HTTP response resolver에 지연 시간을 추가하는 함수입니다.
 *
 * @template Params - 요청의 경로 매개변수 타입(예: 동적 경로 매개변수).
 * @template RequestBodyType - 들어오는 HTTP 요청의 BodyType.
 * @template ResponseBodyType - 나가는 HTTP 응답의 BodyType.
 *
 * @param {number} durationMs - HTTP 요청을 해결하기 전에 대기할 시간(밀리초 단위).
 * @param {HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>} resolver - 원본 HTTP response resolver 함수.
 *
 * @returns {HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>} - 지정된 지연 시간을 적용한 후 원본 resolver를 호출하는 새로운 HTTP response resolver 함수.
 *
 * @example_from_official_document
 *
 * http.get<never, never, 'hello world'>(
 *      '/resource',
 *      withDelay(250, ({ request }) => {
 *          // "http.get()" 요청 핸들러에 제공된 "ResponseBodyType" 제네릭 타입이 사용자 정의 "withDelay" response resolver를 통해 전파됩니다.
 *          return HttpResponse.text('hello world')
 *      })
 * ),
 */

export function withDelay<
  Params extends PathParams,
  RequestBodyType extends DefaultBodyType,
  ResponseBodyType extends DefaultBodyType
>(
  duration: number,
  resolver: HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>
): HttpResponseResolver<Params, RequestBodyType, ResponseBodyType> {
  return async (...args) => {
    await delay(duration)
    return resolver(...args)
  }
}
