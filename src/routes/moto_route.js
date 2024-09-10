const express = require('express');
const router = express.Router();

const moto_router = require('../controllers/moto_controller.js');

router.post('/', moto_router.store)
router.get('/', moto_router.index)
router.get('/', moto_router.show)
router.put('/', moto_router.update)
router.delete('/', moto_router.destroy)

module.exports = router