import Order from '../models/Order.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Public
export const addOrderItems = async (req, res) => {
  try {
    const { product, customerName, phone, email, quantity, deliveryCountry, message } = req.body;

    if (!product) {
      res.status(400).json({ message: 'No order items' });
      return;
    } else {
      const order = new Order({
        product,
        customerName,
        phone,
        email,
        quantity,
        deliveryCountry,
        message
      });

      const createdOrder = await order.save();

      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all orders
// @route   GET /api/admin/orders
// @access  Private/Admin
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('product', 'id name');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update order status
// @route   PUT /api/admin/orders/:id
// @access  Private/Admin
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = req.body.status || order.status;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
