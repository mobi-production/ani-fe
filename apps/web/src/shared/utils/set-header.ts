import { axiosAPIInstance, axiosAuthInstance } from '@/shared/config/api/axios'

function setHeader(key: string, value: string) {
  axiosAPIInstance.defaults.headers.common[key] = value
  axiosAuthInstance.defaults.headers.common[key] = value
}

function removeHeader(key: string) {
  if (
    !axiosAPIInstance.defaults.headers.common[key] ||
    !axiosAuthInstance.defaults.headers.common[key]
  ) {
    return
  }
  delete axiosAPIInstance.defaults.headers.common[key]
  delete axiosAuthInstance.defaults.headers.common[key]
}

export { setHeader, removeHeader }
