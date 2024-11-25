import { useRouter } from 'next/navigation'

export type ServerDrivenFunctionType =
  | {
      type: 'API_CALL'
      url: string
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
    const { url, method, payload } = onClickConfig
    try {
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
    if (type === 'REPLACE') {
      window.location.replace(path)
    } else {
      window.location.href = path
    }
  }
}
