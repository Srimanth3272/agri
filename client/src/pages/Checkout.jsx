import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, CreditCard, Truck, FileText } from 'lucide-react';

const Checkout = () => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', address: '', country: '', paymentMethod: 'bank_transfer'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const submitOrder = async () => {
    // In a real app, this would be an API call to the backend
    /* 
    await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, cartItems })
    });
    */
    setStep(3);
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12">
        <div className={`flex flex-col items-center ${step >= 1 ? 'text-forest-900' : 'text-forest-300'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 1 ? 'bg-forest-900 text-white' : 'bg-forest-100'}`}>1</div>
          <span className="font-medium text-sm">Shipping Details</span>
        </div>
        <div className={`h-1 flex-grow mx-4 rounded ${step >= 2 ? 'bg-forest-900' : 'bg-forest-100'}`}></div>
        <div className={`flex flex-col items-center ${step >= 2 ? 'text-forest-900' : 'text-forest-300'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 2 ? 'bg-forest-900 text-white' : 'bg-forest-100'}`}>2</div>
          <span className="font-medium text-sm">Payment Options</span>
        </div>
        <div className={`h-1 flex-grow mx-4 rounded ${step >= 3 ? 'bg-forest-900' : 'bg-forest-100'}`}></div>
        <div className={`flex flex-col items-center ${step >= 3 ? 'text-forest-900' : 'text-forest-300'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 3 ? 'bg-forest-900 text-white' : 'bg-forest-100'}`}>3</div>
          <span className="font-medium text-sm">Confirmation</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-forest-100 p-8">
        
        {step === 1 && (
          <form onSubmit={handleNext}>
            <h2 className="text-2xl font-bold text-forest-900 mb-6 flex items-center gap-2"><Truck className="text-gold-500" /> Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">Full Name</label>
                <input required type="text" name="name" onChange={handleChange} className="w-full px-4 py-2 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">Company Name (Optional)</label>
                <input type="text" name="company" onChange={handleChange} className="w-full px-4 py-2 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-forest-700 mb-2">Email Address</label>
                <input required type="email" name="email" onChange={handleChange} className="w-full px-4 py-2 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-forest-700 mb-2">Delivery Address</label>
                <input required type="text" name="address" onChange={handleChange} className="w-full px-4 py-2 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-forest-700 mb-2">Country of Destination</label>
                <input required type="text" name="country" onChange={handleChange} className="w-full px-4 py-2 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button type="submit" className="bg-forest-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-forest-800 transition-colors">
                Continue to Payment
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-forest-900 mb-6 flex items-center gap-2"><CreditCard className="text-gold-500" /> Payment Options</h2>
            <p className="text-forest-600 mb-6">Select your preferred method for international B2B transactions. No live gateway is required at this stage.</p>
            
            <div className="space-y-4 mb-8">
              <label className="flex items-center p-4 border border-forest-200 rounded-lg cursor-pointer hover:bg-forest-50 transition-colors">
                <input type="radio" name="paymentMethod" value="bank_transfer" checked={formData.paymentMethod === 'bank_transfer'} onChange={handleChange} className="w-5 h-5 text-forest-900" />
                <div className="ml-4 flex items-center gap-3">
                  <FileText className="text-forest-500" />
                  <span className="font-bold text-forest-900">Direct Bank Transfer (T/T)</span>
                </div>
              </label>
              
              <label className="flex items-center p-4 border border-forest-200 rounded-lg cursor-pointer hover:bg-forest-50 transition-colors">
                <input type="radio" name="paymentMethod" value="lc" checked={formData.paymentMethod === 'lc'} onChange={handleChange} className="w-5 h-5 text-forest-900" />
                <div className="ml-4 flex items-center gap-3">
                  <FileText className="text-forest-500" />
                  <span className="font-bold text-forest-900">Letter of Credit (L/C)</span>
                </div>
              </label>

              <label className="flex items-center p-4 border border-forest-200 rounded-lg cursor-pointer hover:bg-forest-50 transition-colors">
                <input type="radio" name="paymentMethod" value="advance" checked={formData.paymentMethod === 'advance'} onChange={handleChange} className="w-5 h-5 text-forest-900" />
                <div className="ml-4 flex items-center gap-3">
                  <CreditCard className="text-forest-500" />
                  <span className="font-bold text-forest-900">Advance Payment</span>
                </div>
              </label>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={() => setStep(1)} className="text-forest-700 font-medium hover:text-forest-900">
                &larr; Back to Shipping
              </button>
              <button onClick={submitOrder} className="bg-gold-500 text-forest-950 px-8 py-3 rounded-lg font-bold hover:bg-gold-400 transition-colors shadow-lg">
                Place Direct Order
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-12">
            <CheckCircle2 size={80} className="text-gold-500 mx-auto mb-6" />
            <h2 className="text-4xl font-heading font-bold text-forest-900 mb-4">Order Confirmed!</h2>
            <p className="text-lg text-forest-600 mb-8 max-w-lg mx-auto">
              Thank you, {formData.name}. Your order has been placed successfully. Our global logistics team will contact you shortly with the proforma invoice and shipping details.
            </p>
            <Link to="/products" className="bg-forest-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-forest-800 transition-colors inline-block">
              Return to Products
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
