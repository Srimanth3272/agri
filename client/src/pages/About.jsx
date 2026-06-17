import React from 'react';
import { ShieldCheck, Globe, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-forest-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1595966603091-a1e6ec4bdca6?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-heading font-bold mb-6">About AgriNexa</h1>
          <p className="text-xl max-w-2xl mx-auto text-forest-100">
            Pioneering the future of global agricultural trade by connecting local excellence with international demand.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-forest-900 mb-6">Our Story</h2>
            <p className="text-forest-700 leading-relaxed mb-4">
              Founded with a vision to bridge the gap between quality agricultural producers and global markets, AgriNexa has grown into a trusted name in international trade. 
              We understand the intricacies of supply chains, quality control, and international regulations.
            </p>
            <p className="text-forest-700 leading-relaxed">
              Our commitment goes beyond just trading; we build lasting partnerships with farmers, cooperatives, and buyers, ensuring fair trade practices and sustainable growth for all stakeholders involved.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-forest-50 p-6 rounded-2xl border border-forest-100 flex flex-col items-center text-center">
               <Target size={40} className="text-gold-500 mb-4" />
               <h3 className="font-bold text-forest-900 mb-2">Our Mission</h3>
               <p className="text-sm text-forest-600">To provide seamless, transparent, and premium agricultural sourcing to the world.</p>
            </div>
            <div className="bg-forest-50 p-6 rounded-2xl border border-forest-100 flex flex-col items-center text-center">
               <Globe size={40} className="text-gold-500 mb-4" />
               <h3 className="font-bold text-forest-900 mb-2">Our Vision</h3>
               <p className="text-sm text-forest-600">To be the most reliable and innovative global platform for B2B agricultural trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Map Placeholder */}
      <section className="py-20 bg-forest-50 border-y border-forest-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-forest-900 mb-4">Global Presence</h2>
          <p className="text-forest-700 mb-12 max-w-2xl mx-auto">We export to over 45 countries, maintaining strict quality standards across borders.</p>
          
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="World Map" className="w-full opacity-80" />
            <div className="absolute inset-0 bg-forest-900 opacity-20"></div>
            {/* Map dots representation */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gold-500 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gold-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-gold-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-forest-900 mb-4">Leadership Team</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-forest-100 group">
              <div className="h-64 bg-forest-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/400?img=${i * 10 + 5}`} alt="Team Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-forest-900 mb-1">Executive Name</h4>
                <p className="text-gold-600 font-medium text-sm mb-4">Co-Founder & Director</p>
                <p className="text-forest-600 text-sm">Over 15 years of experience in international logistics and agricultural commodities.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-forest-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold mb-10 flex justify-center items-center gap-3">
            <ShieldCheck className="text-gold-500" /> Certifications & Compliance
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="font-heading font-bold text-xl text-forest-200">ISO 9001:2015</div>
            <div className="font-heading font-bold text-xl text-forest-200">HACCP Certified</div>
            <div className="font-heading font-bold text-xl text-forest-200">FDA Registered</div>
            <div className="font-heading font-bold text-xl text-forest-200">Organic Certified</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
