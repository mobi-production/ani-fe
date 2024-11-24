import { HttpHandler } from 'msw'

import { memberHandlers } from './member'
import { pathHandlers } from './path'
import { mainHandlers } from './main'
import { myPageHandlers } from './mypage'

const handler: HttpHandler[] = [
  ...memberHandlers,
  ...pathHandlers,
  ...mainHandlers,
  ...myPageHandlers
]
export default handler
