import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe2, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Countries Served', value: '45+' },
    { label: 'Products Listed', value: '250+' },
    { label: 'Years in Trade', value: '15' },
    { label: 'Happy Clients', value: '10k+' },
  ];

  const categories = [
    { name: 'Grains', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Spices', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pulses', img: 'https://images.unsplash.com/photo-1582294101967-16010b9915aa?auto=format&fit=crop&w=400&q=80' },
    { name: 'Vegetables', img: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fruits', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=400&q=80' },
    { name: 'Oilseeds', img: 'https://images.unsplash.com/photo-1606085183492-3bc17e8893fb?auto=format&fit=crop&w=400&q=80' },
  ];

  const features = [
    { icon: <ShieldCheck size={40} />, title: 'Quality Assured', desc: 'Every batch is rigorously tested to meet international standards.' },
    { icon: <Award size={40} />, title: 'Direct Sourcing', desc: 'We procure directly from farmers, ensuring freshness and fair trade.' },
    { icon: <Globe2 size={40} />, title: 'Global Reach', desc: 'Seamless export logistics to over 45 countries worldwide.' },
    { icon: <Truck size={40} />, title: 'Fast Delivery', desc: 'Optimized supply chains for on-time delivery across borders.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80" 
            alt="Farming landscape" 
            className="w-full h-full object-cover object-center filter brightness-50"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-lg"
          >
            Bridging Fields.<br />
            <span className="text-gold-400">Connecting Nations.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-forest-100 drop-shadow-md"
          >
            Your premium gateway for high-quality, sustainably sourced agricultural products directly from the world's finest farms.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products" className="bg-gold-500 text-forest-950 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gold-400 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Explore Products <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="glass text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white hover:text-forest-950 hover:scale-105 transition-all">
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-forest-900 py-12 relative z-20 -mt-10 mx-4 md:mx-12 rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-gold-500 mb-2">{stat.value}</div>
              <div className="text-forest-100 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-forest-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-forest-900 mb-4">Premium Sourced Categories</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                  <div className="flex items-center text-gold-400 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    View Range <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-50 rounded-l-[100px] -z-10 hidden lg:block"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-heading font-bold text-forest-900 mb-6">Why Partner With <span className="text-gold-500">AgriNexa</span>?</h2>
              <p className="text-lg text-forest-700 mb-10 leading-relaxed">
                We believe in redefining international agricultural trade through transparency, uncompromising quality, and enduring partnerships. 
                Our streamlined processes ensure that the finest produce reaches your destination seamlessly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="w-16 h-16 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-forest-900 mb-2">{feature.title}</h4>
                    <p className="text-forest-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
                alt="Agri logistics" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-forest-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Testimonials placeholder */}
      <section className="py-20 bg-forest-900 text-center text-white">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold mb-12">Trusted by Global Partners</h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Replace with actual logos in production */}
               <div className="text-2xl font-bold font-heading">AGRO CORP</div>
               <div className="text-2xl font-bold font-heading">FRESH MART</div>
               <div className="text-2xl font-bold font-heading">GLOBAL FOODS</div>
               <div className="text-2xl font-bold font-heading">SPICE EXPORTS</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
