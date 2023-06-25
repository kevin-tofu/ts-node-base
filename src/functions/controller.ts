import { Request, Response, NextFunction } from 'express'
const config = require('../config')
const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'info'

exports.app_get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info('app_get')
    const temp = {
      version: config.app_version,
      status: 'OK'
    }
    res.send(temp).status(200)
  } catch (e: any) {
    logger.info(`get_userparent : error = ${e}`)
  } finally {}
}