const express = require('express')
const app = express()
const cors = require('cors')
const adminRouter = require('./modules/adminRouter')
const registerRouter = require('./modules/registerRouter')
const userlistRouter = require('./modules/userlistRouter')

app.use(cors({credentials: true, origin: true}))
app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

app.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})


app.use('/', adminRouter)
app.use('/', registerRouter)
app.use('/', userlistRouter)


app.use((error, req, res, next) => {
  console.log({ error })
})

// Export the server middleware
export default {
  path: '/api',
  handler: app
}