import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-forest-50 font-sans text-forest-950">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;
