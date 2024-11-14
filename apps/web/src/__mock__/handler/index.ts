import { HttpHandler } from 'msw'

import { memberHandlers } from './member'
import { pathHandlers } from './path'

const handler: HttpHandler[] = [...memberHandlers, ...pathHandlers]
export default handler
