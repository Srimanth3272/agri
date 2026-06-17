import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/Product.js';
import Order from './models/Order.js';

dotenv.config();

connectDB();

const products = [
  // Grains
  { name: 'Premium Basmati Rice', category: 'Grains', originCountry: 'India', description: 'Extra long grain Basmati rice.', price: 1250, unit: 'Per MT', moq: 10, images: ['https://images.unsplash.com/photo-1586201375761-83865001e31c'], specs: { moisture: '12% Max', packing: '50kg Bags', shelfLife: '24 Months' }, stock: 500 },
  { name: 'Hard Red Winter Wheat', category: 'Grains', originCountry: 'USA', description: 'High protein winter wheat for baking.', price: 320, unit: 'Per MT', moq: 50, images: ['https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b'], specs: { moisture: '13% Max', packing: 'Bulk', shelfLife: '12 Months' }, stock: 2000 },
  { name: 'Yellow Corn (Maize)', category: 'Grains', originCountry: 'Brazil', description: 'Grade A yellow corn for animal feed.', price: 250, unit: 'Per MT', moq: 100, images: ['https://images.unsplash.com/photo-1596485731998-e7e2247fb426'], specs: { moisture: '14% Max', packing: 'Bulk', shelfLife: '12 Months' }, stock: 10000 },
  { name: 'White Quinoa', category: 'Grains', originCountry: 'Peru', description: 'Organic premium white quinoa.', price: 2800, unit: 'Per MT', moq: 5, images: ['https://images.unsplash.com/photo-1586201375761-83865001e31c'], specs: { moisture: '11% Max', packing: '25kg Paper Bags', shelfLife: '24 Months' }, stock: 150 },
  // Spices
  { name: 'Organic Black Pepper', category: 'Spices', originCountry: 'Vietnam', description: 'High pungency organic black pepper corns.', price: 4500, unit: 'Per MT', moq: 5, images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d'], specs: { moisture: '11% Max', packing: '25kg Bags', shelfLife: '36 Months' }, stock: 200 },
  { name: 'Ceylon Cinnamon', category: 'Spices', originCountry: 'Sri Lanka', description: 'True Ceylon cinnamon sticks.', price: 8500, unit: 'Per MT', moq: 1, images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf'], specs: { moisture: '10% Max', packing: '10kg Cartons', shelfLife: '36 Months' }, stock: 50 },
  { name: 'Turmeric Fingers', category: 'Spices', originCountry: 'India', description: 'High curcumin turmeric fingers.', price: 1800, unit: 'Per MT', moq: 10, images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d'], specs: { moisture: '10% Max', packing: '25kg Bags', shelfLife: '24 Months' }, stock: 300 },
  // Pulses
  { name: 'Red Lentils (Masoor Dal)', category: 'Pulses', originCountry: 'Canada', description: 'Split red lentils.', price: 850, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1582294101967-16010b9915aa'], specs: { moisture: '10% Max', packing: '50kg Bags', shelfLife: '12 Months' }, stock: 1000 },
  { name: 'Chickpeas (Garbanzo)', category: 'Pulses', originCountry: 'Australia', description: 'Large Kabuli type chickpeas.', price: 950, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1582294101967-16010b9915aa'], specs: { moisture: '12% Max', packing: '25kg Bags', shelfLife: '24 Months' }, stock: 600 },
  { name: 'Green Mung Beans', category: 'Pulses', originCountry: 'Myanmar', description: 'High-quality green mung beans.', price: 1100, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1582294101967-16010b9915aa'], specs: { moisture: '12% Max', packing: '50kg Bags', shelfLife: '24 Months' }, stock: 400 },
  // Vegetables
  { name: 'Yellow Onion', category: 'Vegetables', originCountry: 'Egypt', description: 'Firm yellow onions.', price: 320, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c'], specs: { moisture: 'N/A', packing: '25kg Mesh', shelfLife: '6 Months' }, stock: 1500 },
  { name: 'Fresh Garlic', category: 'Vegetables', originCountry: 'China', description: 'Premium fresh white garlic.', price: 850, unit: 'Per MT', moq: 15, images: ['https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c'], specs: { moisture: 'N/A', packing: '10kg Mesh', shelfLife: '9 Months' }, stock: 800 },
  { name: 'Red Potatoes', category: 'Vegetables', originCountry: 'Netherlands', description: 'Export quality red potatoes.', price: 400, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c'], specs: { moisture: 'N/A', packing: '25kg Bags', shelfLife: '4 Months' }, stock: 2000 },
  { name: 'Fresh Ginger', category: 'Vegetables', originCountry: 'Thailand', description: 'Plump and fresh ginger roots.', price: 1200, unit: 'Per MT', moq: 10, images: ['https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c'], specs: { moisture: 'N/A', packing: '10kg PVC Boxes', shelfLife: '3 Months' }, stock: 400 },
  // Fruits
  { name: 'Cavendish Bananas', category: 'Fruits', originCountry: 'Ecuador', description: 'Green cavendish bananas.', price: 450, unit: 'Per MT', moq: 15, images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf'], specs: { moisture: 'N/A', packing: '18kg Boxes', shelfLife: '45 Days' }, stock: 800 },
  { name: 'Hass Avocados', category: 'Fruits', originCountry: 'Mexico', description: 'Premium Hass avocados.', price: 2500, unit: 'Per MT', moq: 5, images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf'], specs: { moisture: 'N/A', packing: '4kg Cartons', shelfLife: '30 Days' }, stock: 200 },
  { name: 'Fresh Mangoes', category: 'Fruits', originCountry: 'India', description: 'Alphonso and Tommy Atkins varieties.', price: 1800, unit: 'Per MT', moq: 5, images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf'], specs: { moisture: 'N/A', packing: '5kg Cartons', shelfLife: '20 Days' }, stock: 150 },
  // Oilseeds
  { name: 'Soybeans', category: 'Oilseeds', originCountry: 'Brazil', description: 'Non-GMO soybeans.', price: 520, unit: 'Per MT', moq: 50, images: ['https://images.unsplash.com/photo-1606085183492-3bc17e8893fb'], specs: { moisture: '13% Max', packing: 'Bulk', shelfLife: '24 Months' }, stock: 5000 },
  { name: 'Sesame Seeds', category: 'Oilseeds', originCountry: 'Ethiopia', description: 'Hulled whitish sesame seeds.', price: 1600, unit: 'Per MT', moq: 15, images: ['https://images.unsplash.com/photo-1606085183492-3bc17e8893fb'], specs: { moisture: '8% Max', packing: '50kg Bags', shelfLife: '18 Months' }, stock: 800 },
  { name: 'Sunflower Seeds', category: 'Oilseeds', originCountry: 'Ukraine', description: 'High-oil content sunflower seeds.', price: 650, unit: 'Per MT', moq: 20, images: ['https://images.unsplash.com/photo-1606085183492-3bc17e8893fb'], specs: { moisture: '10% Max', packing: 'Bulk', shelfLife: '12 Months' }, stock: 3000 }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Order.deleteMany();

    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
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

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
