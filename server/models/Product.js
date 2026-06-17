import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  originCountry: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true, default: 'Per Metric Ton' },
  moq: { type: Number, required: true },
  images: [{ type: String }],
  specs: {
    moisture: { type: String },
    packing: { type: String },
    shelfLife: { type: String }
  },
  stock: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
