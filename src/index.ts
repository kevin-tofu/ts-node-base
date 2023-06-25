// import express from 'express'
// import * as express from 'express';
// const express = require('Express')
import express, { Express, Request, Response, NextFunction } from 'express';
// import { Request, Response, NextFunction } from 'express'
import type { Error } from './functions/model'
const router = require('./functions/router')
const config = require('./config')

const cors = require('cors')
// const app = express()
const app: Express = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', ( req: Request, res: Response ) => {
  res.send('connected').status(200);
});
app.use('/app/', router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const {statusCode = 500, message} = err
  res.status(statusCode).send(message)
})
const server = app.listen(config.APP_PORT, () =>
  console.log(`
🚀 Server ready at: http://localhost:${config.APP_PORT}
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
exports.app = app


