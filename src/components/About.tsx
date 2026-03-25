import React from 'react';

const About: React.FC = () => (
  <div className="min-h-screen pt-32 pb-20 px-6 overflow-hidden relative">
    <div className="max-w-6xl mx-auto text-center px-6">
      <h1 className="hero-title mb-8 fade-in-up">Kochford</h1>
      <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
        Премиум канцелярия и аксессуары для газировки. 
        Лидер на WB, Ozon, Яндекс.Маркет с 2020.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 fade-in-up" style={{animationDelay: '0.4s'}}>
        <div className="glass-card p-12">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
            
          </div>
          <h3 className="text-3xl font-bold mb-4">10000+ Товаров продано</h3>
          <p className="text-lg text-white/80"></p>
        </div>
        <div className="glass-card p-12">
          <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
            
          </div>
          <h3 className="text-3xl font-bold mb-4"></h3>
          <p className="text-lg text-white/80"></p>
        </div>
        <div className="glass-card p-12">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
            
          </div>
          <h3 className="text-3xl font-bold mb-4"></h3>
          <p className="text-lg text-white/80"></p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
