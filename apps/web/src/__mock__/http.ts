import { createMiddleware } from '@mswjs/http-middleware'
import cors from 'cors'
import express from 'express'
import handler from './handler'

const app = express()
const port = 9090

app.use(cors({ origin: '*', optionsSuccessStatus: 200, credentials: true }))
app.use(express.json())
app.use(createMiddleware(...handler))
app.listen(port, () => console.info(`Mock server is running on port: ${port}`))
