const express = require('express');
const router = express.Router();

const caneta_controller = require('../controllers/caneta_controller.js');

router.post('/', caneta_controller.store)
router.get('/', caneta_controller.index)
router.get('/', caneta_controller.show)
router.put('/', caneta_controller.update)
router.delete('/', caneta_controller.destroy)

module.exports = router