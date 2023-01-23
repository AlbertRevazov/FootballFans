require('dotenv').config()
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const checkSession = require('./middlewares/checkSession')
const authRoute = require('./routes/auth.js')
const app = express()

app.use(
  cors({
    credentials: true,
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false
  })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const sessionConfig = {
  name: 'cook',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  },
  resave: true,
  saveUninitialized: false
}

app.use(session(sessionConfig))
app.use(checkSession)
app.use('/users', authRoute)

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT)
})
