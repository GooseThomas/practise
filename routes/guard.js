const {Router} = require('express')
const router = Router()
const pl = require('../controllers/guard')
//GET, POST, PUT, PATCH, and DELETE
router.get  ('/info'                     , pl.root         )
router.stack.forEach(t=>{ console.log('[pl]', t.route.path)})
module.exports = router