import { HttpHandler } from 'msw'

import { memberHandlers } from './member'
import { pathHandlers } from './path'
import { mainHandlers } from './main'
import { myPageHandlers } from './mypage'
import { authHandlers } from './auth'

const handler: HttpHandler[] = [
  ...memberHandlers,
  ...pathHandlers,
  ...mainHandlers,
  ...myPageHandlers,
  ...authHandlers
]
export default handler
