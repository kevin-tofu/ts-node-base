import { Router } from 'express'
// const { auth_parent, auth_child } = require('../functions/auth')
// const { auth_parent } = require('../functions/auth')
const { 
  app_get
} = require('./controller')

const router: Router = Router()

router.route('/app')
  .get(app_get)
  
  
module.exports = router;
