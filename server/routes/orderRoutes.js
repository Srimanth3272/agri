import express from 'express';
import { addOrderItems, getOrders, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

router.route('/').post(addOrderItems);
router.route('/admin').get(getOrders);
router.route('/admin/:id').put(updateOrderStatus);

export default router;
