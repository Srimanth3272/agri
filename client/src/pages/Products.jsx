import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { mockProducts } from '../utils/data';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Grains', 'Spices', 'Pulses', 'Fruits', 'Vegetables', 'Oilseeds'];

  const filteredProducts = mockProducts.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-forest-200 pb-6">
        <div>
          <h1 className="text-4xl font-heading font-bold text-forest-900 mb-2">Our Premium Products</h1>
          <p className="text-forest-700">Source the finest agricultural commodities globally.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <div className="glass p-6 rounded-2xl sticky top-28">
            <h3 className="text-lg font-bold text-forest-900 mb-4 flex items-center gap-2"><Filter size={20}/> Filters</h3>
            
            <div className="mb-6 relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-forest-50 border border-forest-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-shadow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={18} className="absolute left-3 top-3 text-forest-500" />
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-forest-800 mb-3">Categories</h4>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === cat ? 'bg-forest-900 text-white font-medium' : 'text-forest-700 hover:bg-forest-100'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group border border-forest-100 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-xs font-bold text-forest-900 shadow-sm flex items-center gap-1">
                    {product.flag} {product.originCountry}
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="text-xs font-bold text-gold-600 mb-1 uppercase tracking-wide">{product.category}</div>
                  <h3 className="text-xl font-bold text-forest-900 mb-2 leading-tight">{product.name}</h3>
                  <div className="text-forest-600 text-sm mb-4 line-clamp-2">{product.description}</div>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-xl font-bold text-forest-900">${product.price}</span>
                        <span className="text-xs text-forest-500 block">{product.unit}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-forest-700">MOQ</span>
                        <span className="text-sm text-forest-900 block font-bold">{product.moq} MT</span>
                      </div>
                    </div>
                    
                    <Link to={`/products/${product.id}`} className="block w-full text-center bg-forest-900 text-white py-2.5 rounded-lg hover:bg-forest-800 transition-colors font-medium">
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-forest-900 mb-2">No products found</h3>
              <p className="text-forest-600">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
