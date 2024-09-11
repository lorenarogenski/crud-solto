const express = require('express')
const router = express.Router()

const refrigerante_router = require('../controllers/refrigerante_controller.js')

router.post('/', refrigerante_router.store)
router.get('/', refrigerante_router.index)
router.get('/', refrigerante_router.show)
router.get('/', refrigerante_router.update)
router.delete('/', refrigerante_router.destroy)

module.exports = router