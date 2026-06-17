import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-forest-800 pb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Globe className="text-gold-500" size={32} />
            <span className="text-2xl font-heading font-bold text-white">AgriNexa</span>
          </Link>
          <p className="text-forest-200 text-sm mb-6 leading-relaxed">
            Bridging Fields. Connecting Nations. Your premium partner in global agricultural trade, delivering quality produce across borders.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-heading font-bold mb-6 text-gold-500">Quick Links</h4>
          <ul className="space-y-3 text-sm text-forest-200">
            <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-gold-400 transition-colors">Products</Link></li>
            <li><Link to="/cart" className="hover:text-gold-400 transition-colors">Cart</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-heading font-bold mb-6 text-gold-500">Categories</h4>
          <ul className="space-y-3 text-sm text-forest-200">
            <li><Link to="/products?category=Grains" className="hover:text-gold-400 transition-colors">Grains & Cereals</Link></li>
            <li><Link to="/products?category=Spices" className="hover:text-gold-400 transition-colors">Spices & Herbs</Link></li>
            <li><Link to="/products?category=Pulses" className="hover:text-gold-400 transition-colors">Pulses & Beans</Link></li>
            <li><Link to="/products?category=Fruits" className="hover:text-gold-400 transition-colors">Fresh Fruits</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-heading font-bold mb-6 text-gold-500">Contact Us</h4>
          <ul className="space-y-4 text-sm text-forest-200">
            <li className="flex items-start gap-3">
              <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
              <span>123 Trade Center, Global Business Park, Agri City, AC 12345</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-gold-500 shrink-0 mt-1" size={18} />
              <div>
                <span className="block mb-1">+91 93474 05899 (WhatsApp)</span>
                <span className="block">+1 (937) 200 1529 (Voice Agent)</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-gold-500 shrink-0" size={18} />
              <span>exports@agrinexa.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-forest-400">
        <p>&copy; {new Date().getFullYear()} AgriNexa. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
