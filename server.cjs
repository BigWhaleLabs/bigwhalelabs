const path = require('path')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')
const cluster = require('cluster')
const { cpus } = require('os')
const ViteExpress = require('vite-express')

const numCPUs = cpus().length

process.env.NODE_ENV = 'production'
const CLIENT_BUILD_DIR = path.join(process.cwd(), 'dist')

if (cluster.isPrimary) {
  console.log('🕺🕺🕺🕺🕺🕺🕺🕺🕺')
  console.log('🕺 Starting server...')
  console.log('🕺🕺🕺🕺🕺🕺🕺🕺🕺')
  console.log(`Main ${process.pid} is running`)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`)
    console.log('Forking a new process...')
    cluster.fork()
  })
} else {
  const app = express()
  app.use(compression())
  // http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
  app.disable('x-powered-by')
  app.use(cors())
  app.use(
    '/',
    express.static(CLIENT_BUILD_DIR, {
      maxAge: '1h',
      extensions: ['html'],
    })
  )
  app.use(morgan('tiny'))
  const port = process.env.PORT || 5173
  ViteExpress.config({
    transformer: (html) => {
      return html
    },
  })
  ViteExpress.listen(
    app,
    port,
    console.log(
      `Express server listening on port ${port} (worker id: ${cluster.worker.id})`
    )
  )
}
