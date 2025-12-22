
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>

        <section id="features" className="py-24 bg-slate-50">
          <Features />
        </section>

        <section id="cta" className="py-20 bg-rose-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-400 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Bạn đã sẵn sàng nâng tầm bán hàng?</h2>
             <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
               Gia nhập cùng 500+ doanh nghiệp đang bùng nổ doanh số với Sigma AI. Miễn phí cài đặt trong 7 ngày đầu tiên.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="bg-white text-rose-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-rose-50 transition shadow-xl">
                 Đăng ký dùng thử miễn phí
               </button>
               <button className="bg-rose-700 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-rose-800 transition">
                 Liên hệ đội ngũ Sales
               </button>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
