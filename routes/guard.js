const {Router} = require('express')
const router = Router()
const pl = require('../controllers/guard')
//GET, POST, PUT, PATCH, and DELETE
router.get  ('/info'                     , pl.info         )

router.stack.forEach(t=>{ console.log('[api]', t.route.path)})

module.exports = router