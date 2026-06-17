import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = 0; // Placeholder until cart context is implemented

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'te' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('products'), path: '/products' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-forest-900 rounded-full flex items-center justify-center text-gold-500 shadow-md group-hover:scale-105 transition-transform">
            <Globe size={24} />
          </div>
          <span className="text-2xl font-heading font-bold text-forest-900">AgriNexa</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`transition-colors hover:text-forest-700 ${location.pathname === link.path ? 'text-forest-900 font-bold border-b-2 border-gold-500' : 'text-forest-800'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l pl-4 border-forest-200">
            <button onClick={toggleLanguage} className="text-sm font-bold text-forest-800 hover:text-forest-600 transition-colors uppercase">
              {i18n.language === 'en' ? 'TE' : 'EN'}
            </button>
            <Link to="/cart" className="relative text-forest-800 hover:text-forest-600 transition-colors">
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-500 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm text-forest-950">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-forest-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-dark py-6 shadow-2xl"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-6 mt-4 pt-4 border-t border-forest-700 w-2/3 justify-center">
                <button onClick={toggleLanguage} className="text-lg font-bold hover:text-gold-400 transition-colors uppercase">
                  {i18n.language === 'en' ? 'TE (Telugu)' : 'EN (English)'}
                </button>
                <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="relative hover:text-gold-400 transition-colors">
                  <ShoppingCart size={24} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gold-500 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full text-forest-950">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
