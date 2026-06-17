import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product'
  },
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  quantity: { type: Number, required: true },
  deliveryCountry: { type: String, required: true },
  message: { type: String },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Processing', 'Shipped'],
    default: 'Pending'
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
