import { HttpHandler } from 'msw'

import { memberHandlers } from './member'

const handler: HttpHandler[] = [...memberHandlers]
export default handler
