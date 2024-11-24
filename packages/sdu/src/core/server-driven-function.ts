import { useRouter } from 'next/navigation'

export type ServerDrivenFunctionType =
  | {
      type: 'API_CALL'
      endpoint: string
      method: 'GET' | 'POST' | 'PUT' | 'DELETE'
      payload: {
        [key: string]: string | number | boolean | null
      }
    }
  | {
      type: 'NAVIGATE'
      payload: {
        type: 'REPLACE' | 'PUSH'
        path: string
      }
    }

export async function serverDrivenFunction(
  onClickConfig: ServerDrivenFunctionType,
  router?: ReturnType<typeof useRouter>
) {
  if (onClickConfig.type === 'API_CALL') {
    const { endpoint, method, payload } = onClickConfig
    try {
      const url = endpoint
      const options = {
        method,
        body: JSON.stringify(payload)
      }
      const response = await fetch(url, options)
      return await response.json()
    } catch (error) {
      console.error(error)
    }
  }
  if (onClickConfig.type === 'NAVIGATE' && router) {
    const { type, path } = onClickConfig.payload
    router[type === 'REPLACE' ? 'replace' : 'push'](path)
  }
}
