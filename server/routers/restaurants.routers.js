const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../controllers/restaurants.controllers');

//Define API
router.get('/', restaurantCtrl.getOrders);
router.post('/', restaurantCtrl.createOrder);
router.get('/:id', restaurantCtrl.getOrder);
router.put('/:id', restaurantCtrl.editOrder);
router.delete('/:id', restaurantCtrl.deleteOrder);

module.exports = router;