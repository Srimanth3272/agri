import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Load env vars
dotenv.config();

// Connect to database
await connectDB();

const app = express();

// Middleware — Allow Vercel frontend + local dev + ngrok
const allowedOrigins = [
  process.env.VERCEL_URL || '',                          // https://agri-flame-theta.vercel.app
  'https://sixfold-module-sarcastic.ngrok-free.dev',    // ngrok tunnel
  'http://localhost:3000',                               // local dev
  'http://172.16.1.62:3000',                            // laptop LAN access
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.some(o => o && origin.startsWith(o))) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());

// Routes
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { importData } from './seeder.js';
import Product from './models/Product.js';

app.get('/', (req, res) => {
  res.send('AgriNexa API is running...');
});

// Seed DB if empty (useful for memory server)
const seedIfEmpty = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log('Database empty. Seeding...');
      await importData();
    }
  } catch (err) {
    console.error(err);
  }
};
await seedIfEmpty();

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
