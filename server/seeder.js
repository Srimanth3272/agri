import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/Product.js';
import Order from './models/Order.js';

dotenv.config();

// We will only call connectDB if the script is run directly.
const products = [
  // Grains
  { name: 'Premium Basmati Rice', category: 'Grains', originCountry: 'India', description: 'Extra long grain Basmati rice.', internationalPrice: 100000, price: 90000, unit: 'Per MT', moq: 10, images: ['https://images.unsplash.com/photo-1586201375761-83865001e31c'], specs: { moisture: '12% Max', packing: '50kg Bags', shelfLife: '24 Months' }, stock: 500 },
  { name: 'Hard Red Winter Wheat', category: 'Grains', originCountry: 'USA', description: 'High protein winter wheat for baking.', internationalPrice: 25000, price: 22500, unit: 'Per MT', moq: 50, images: ['https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b'], specs: { moisture: '13% Max', packing: 'Bulk', shelfLife: '12 Months' }, stock: 2000 },
  { name: 'Yellow Corn (Maize)', category: 'Grains', originCountry: 'Brazil', description: 'Grade A yellow corn for animal feed.', internationalPrice: 20000, price: 18000, unit: 'Per MT', moq: 100, images: ['/images/yellow-corn.png'], specs: { moisture: '14% Max', packing: 'Bulk', shelfLife: '12 Months' }, stock: 10000 },
  { name: 'Premium Raw Paddy', category: 'Grains', originCountry: 'India', description: 'Freshly harvested, high-yield raw paddy.', internationalPrice: 300000, price: 270000, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1586201375761-83865001e31c'], specs: { moisture: '14% Max', packing: '50kg Bags', shelfLife: '12 Months' }, stock: 5000 },
  // Spices
  { name: 'Organic Black Pepper', category: 'Spices', originCountry: 'Vietnam', description: 'High pungency organic black pepper corns.', internationalPrice: 400000, price: 360000, unit: 'Per MT', moq: 5, images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d'], specs: { moisture: '11% Max', packing: '25kg Bags', shelfLife: '36 Months' }, stock: 200 },
  { name: 'Turmeric Fingers', category: 'Spices', originCountry: 'India', description: 'High curcumin turmeric fingers.', internationalPrice: 150000, price: 135000, unit: 'Per MT', moq: 10, images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d'], specs: { moisture: '10% Max', packing: '25kg Bags', shelfLife: '24 Months' }, stock: 300 },
  // Vegetables
  { name: 'Red Onion', category: 'Vegetables', originCountry: 'India', description: 'Fresh, pungent red onions.', internationalPrice: 30000, price: 27000, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c'], specs: { moisture: 'N/A', packing: '25kg Mesh', shelfLife: '6 Months' }, stock: 1500 },
  { name: 'Farm Fresh Tomatoes', category: 'Vegetables', originCountry: 'India', description: 'Juicy, export-quality red tomatoes.', internationalPrice: 40000, price: 36000, unit: 'Per MT', moq: 10, images: ['https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c'], specs: { moisture: 'N/A', packing: '10kg Cartons', shelfLife: '2 Weeks' }, stock: 800 },
  { name: 'Fresh Potatoes', category: 'Vegetables', originCountry: 'India', description: 'Export quality potatoes.', internationalPrice: 25000, price: 22500, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c'], specs: { moisture: 'N/A', packing: '25kg Bags', shelfLife: '4 Months' }, stock: 2000 },
  // Fruits
  { name: 'Alphonso Mangoes', category: 'Fruits', originCountry: 'India', description: 'King of mangoes, premium Alphonso.', internationalPrice: 200000, price: 180000, unit: 'Per MT', moq: 2, images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf'], specs: { moisture: 'N/A', packing: '5kg Cartons', shelfLife: '15 Days' }, stock: 100 },
  { name: 'Cavendish Bananas', category: 'Fruits', originCountry: 'Ecuador', description: 'Green cavendish bananas.', internationalPrice: 35000, price: 31500, unit: 'Per MT', moq: 15, images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf'], specs: { moisture: 'N/A', packing: '18kg Boxes', shelfLife: '45 Days' }, stock: 800 },
  // Oilseeds
  { name: 'Premium Groundnut (Peanut)', category: 'Oilseeds', originCountry: 'India', description: 'High-oil content raw groundnuts.', internationalPrice: 150000, price: 135000, unit: 'Per MT', moq: 15, images: ['/images/groundnut.png'], specs: { moisture: '7% Max', packing: '50kg Bags', shelfLife: '12 Months' }, stock: 1200 },
  { name: 'Soybeans', category: 'Oilseeds', originCountry: 'Brazil', description: 'Non-GMO soybeans.', internationalPrice: 50000, price: 45000, unit: 'Per MT', moq: 50, images: ['/images/soybeans.png'], specs: { moisture: '13% Max', packing: 'Bulk', shelfLife: '24 Months' }, stock: 5000 }
];

export const importData = async () => {
  try {
    await Product.deleteMany();
    await Order.deleteMany();

    await Product.insertMany(products);

    console.log('Data Imported!');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Order.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

import url from 'url';

if (import.meta.url.startsWith('file:')) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) {
    connectDB().then(() => {
      if (process.argv[2] === '-d') {
        destroyData();
      } else {
        importData().then(() => process.exit());
      }
    });
  }
}
