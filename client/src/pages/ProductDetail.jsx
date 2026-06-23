import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Truck, Package } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'https://sixfold-module-sarcastic.ngrok-free.dev';
        const res = await fetch(`${API_URL}/api/products/${id}`, {
          headers: { 'ngrok-skip-browser-warning': 'true' }
        });
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          setProduct(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', quantity: '', country: '', message: ''
  });

  if (loading) {
    return <div className="text-center py-20 text-2xl font-bold text-forest-900">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-2xl font-bold text-forest-900">Product not found.</div>;
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, quantity, country, message } = formData;
    const text = `🌾 *New AgriNexa Order Inquiry*%0A%0A*Product:* ${product.name}%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Quantity:* ${quantity} MT%0A*Delivery to:* ${country}%0A*Message:* ${message}`;
    window.open(`https://wa.me/+919347405899?text=${text}`, '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Link to="/products" className="inline-flex items-center text-forest-700 hover:text-gold-600 font-medium mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" /> Back to Products
      </Link>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-forest-100 flex flex-col lg:flex-row">
        {/* Image Gallery */}
        <div className="lg:w-1/2 p-8 bg-forest-50 flex items-center justify-center">
          <img src={product.images[0]} alt={product.name} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg" />
        </div>

        {/* Product Info & Order Form */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{product.category}</span>
            <span className="flex items-center gap-1 text-sm font-medium text-forest-700"><span className="text-lg">{product.flag}</span> {product.originCountry}</span>
          </div>
          
          <h1 className="text-4xl font-heading font-bold text-forest-900 mb-4">{product.name}</h1>
          <p className="text-lg text-forest-600 mb-6 leading-relaxed">{product.description}</p>
          
          <div className="flex items-end gap-4 mb-8 pb-8 border-b border-forest-100">
            <div className="flex flex-col">
              {product.internationalPrice && (
                 <span className="text-lg line-through text-forest-400">₹{product.internationalPrice.toLocaleString()}</span>
              )}
              <div className="text-4xl font-bold text-forest-900">₹{product.price.toLocaleString()}</div>
            </div>
            <div className="text-forest-500 mb-1">{product.unit}</div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <Package className="text-gold-500 mt-1" size={20} />
              <div>
                <div className="text-sm text-forest-500">Packing</div>
                <div className="font-semibold text-forest-900">{product.specs.packing}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="text-gold-500 mt-1" size={20} />
              <div>
                <div className="text-sm text-forest-500">Shelf Life</div>
                <div className="font-semibold text-forest-900">{product.specs.shelfLife}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-gold-500 mt-1" size={20} />
              <div>
                <div className="text-sm text-forest-500">Moisture</div>
                <div className="font-semibold text-forest-900">{product.specs.moisture}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="text-gold-500 mt-1" size={20} />
              <div>
                <div className="text-sm text-forest-500">Min. Order (MOQ)</div>
                <div className="font-semibold text-forest-900">{product.moq} Metric Tons</div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100 mt-auto">
            <h3 className="text-xl font-bold text-forest-900 mb-4 font-heading">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" />
                <input required type="tel" name="phone" placeholder="WhatsApp Number" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" />
                <input required type="number" name="quantity" min={product.moq} placeholder={`Quantity (Min ${product.moq} MT)`} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </div>
              <input required type="text" name="country" placeholder="Delivery Country" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" />
              <textarea name="message" placeholder="Additional details or requirements..." rows="3" onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500"></textarea>
              <button type="submit" className="w-full bg-forest-900 text-white font-bold py-3 rounded-lg hover:bg-forest-800 transition-colors shadow-md">
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
