export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
} as const

export type HttpMethod = keyof typeof HTTP_METHODS

export const HTTP_HEADERS = {
  JSON: { 'Content-Type': 'application/json' },
  MULTIPART: { 'Content-Type': 'multipart/form-data' }
} as const
