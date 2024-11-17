import { HttpHandler } from 'msw'

import { memberHandlers } from './member'
import { pathHandlers } from './path'
import { mainHandlers } from './main'

const handler: HttpHandler[] = [...memberHandlers, ...pathHandlers, ...mainHandlers]
export default handler
