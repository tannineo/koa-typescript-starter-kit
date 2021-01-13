/**
 * app.ts
 *
 * The app is initalized here.
 */
import path from 'path'
import Koa from 'koa'
import Router from '@koa/router'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import serveStatic from 'koa-static'

const app = new Koa()

// Middlewares -------------------------------
// Provides important security headers to make your app more secure
app.use(helmet())

// Enable cors with default options
app.use(cors())

// Enable bodyparser
app.use(bodyParser())

app.use(serveStatic(path.resolve(__dirname, '../public')))

// Routes ------------------------------
const router = new Router()

router.get('/api/hello', async (ctx: Koa.Context) => {
  ctx.body = 'Hello World!'
})

app.use(router.routes())

export default app
