import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { mockProducts } from '../utils/data';

const Cart = () => {
  // Mock cart items based on our mock data
  const cartItems = [
    { ...mockProducts[0], cartQuantity: 15 },
    { ...mockProducts[2], cartQuantity: 20 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.cartQuantity), 0);

  const handleWhatsAppQuote = () => {
    let text = `🌾 *AgriNexa Bulk Quote Request*%0A%0A`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* - ${item.cartQuantity} MT%0A`;
    });
    text += `%0A*Estimated Subtotal:* $${subtotal.toLocaleString()}%0A%0APlease provide a formal quote including shipping.`;
    
    window.open(`https://wa.me/+919347405899?text=${text}`, '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-heading font-bold text-forest-900 mb-8">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-forest-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-forest-50 border-b border-forest-100 text-forest-700 text-sm uppercase tracking-wider">
                    <th className="p-4 font-semibold">Product</th>
                    <th className="p-4 font-semibold">Price (MT)</th>
                    <th className="p-4 font-semibold">Quantity</th>
                    <th className="p-4 font-semibold">Total</th>
                    <th className="p-4 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-forest-50 hover:bg-forest-50/50 transition-colors">
                      <td className="p-4 flex items-center gap-4">
                        <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                        <div>
                          <div className="font-bold text-forest-900">{item.name}</div>
                          <div className="text-xs text-forest-500 uppercase">{item.category}</div>
                        </div>
                      </td>
                      <td className="p-4 text-forest-700">${item.price.toLocaleString()}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            min={item.moq} 
                            value={item.cartQuantity} 
                            readOnly
                            className="w-20 px-3 py-1 border border-forest-200 rounded text-center focus:outline-none"
                          />
                          <span className="text-xs text-forest-500">MT</span>
                        </div>
                      </td>
                      <td className="p-4 font-bold text-forest-900">${(item.price * item.cartQuantity).toLocaleString()}</td>
                      <td className="p-4 text-right">
                        <button className="text-red-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50">
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <Link to="/products" className="inline-block mt-6 text-forest-700 hover:text-forest-900 font-medium">
              &larr; Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-forest-900 text-white p-8 rounded-2xl shadow-xl sticky top-28">
              <h3 className="text-2xl font-heading font-bold mb-6 border-b border-forest-700 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-forest-200">Subtotal</span>
                  <span className="font-bold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-200">Shipping</span>
                  <span className="text-gold-400 font-medium">To be quoted</span>
                </div>
              </div>
              
              <div className="border-t border-forest-700 pt-4 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">Estimated Total</span>
                  <span className="text-3xl font-bold text-gold-500">${subtotal.toLocaleString()}</span>
                </div>
                <div className="text-xs text-forest-400 mt-2 text-right">Excluding shipping and taxes</div>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={handleWhatsAppQuote}
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Request Bulk Quote (WhatsApp)
                </button>
                
                <Link to="/checkout" className="w-full bg-gold-500 text-forest-950 font-bold py-4 rounded-xl hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Proceed to Checkout <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-forest-100">
          <div className="w-24 h-24 bg-forest-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trash2 size={40} className="text-forest-300" />
          </div>
          <h2 className="text-2xl font-bold text-forest-900 mb-2">Your cart is empty</h2>
          <p className="text-forest-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="bg-forest-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-forest-800 transition-colors">
            Browse Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
