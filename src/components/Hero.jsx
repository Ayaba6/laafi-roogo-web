import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// IMPORTATION DES IMAGES
import img1 from '../assets/hero1.jpg'; 
import img2 from '../assets/hero2.jpg';
import img3 from '../assets/hero3.jpg';

const slides = [
  {
    badge: "Association Apolitique & Laïque",
    title: "LAAFI ROOGO",
    subtitle: "BURKINA",
    desc: '"La Maison Santé" — Œuvrer pour la promotion de la santé par les plantes au Burkina Faso.',
    btnText: "Nos missions",
    link: "/actions",
    color: "text-green-600",
    image: img1
  },
  {
    badge: "Savoirs Traditionnels",
    title: "MÉDECINE",
    subtitle: "VERTE",
    desc: "Valoriser l'expertise des tradipraticiens pour un système de santé intégré au Burkina Faso.",
    btnText: "Nos Actions",
    link: "/actions",
    color: "text-emerald-600",
    image: img2
  },
  {
    badge: "Engagement Durable",
    title: "PROTÉGER",
    subtitle: "LA NATURE",
    desc: "Préserver la biodiversité locale pour garantir une production durable de plantes médicinales.",
    btnText: "Nous soutenir",
    link: "/don",
    color: "text-lime-600",
    image: img3
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center pt-6 md:pt-10 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      
      {/* Cercles décoratifs (visibles uniquement sur desktop pour ne pas charger le mobile) */}
      <div className="hidden md:block absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current} 
            className="relative md:grid md:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            
            {/* --- SECTION IMAGE : Fond sur mobile, Colonne droite sur desktop --- */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full md:order-2"
            >
              <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-2 md:border-4 border-white aspect-[4/5] md:aspect-auto">
                <img 
                  src={slides[current].image} 
                  alt={slides[current].title}
                  className="w-full h-full md:h-[450px] object-cover transition-transform duration-[10000ms] scale-110"
                />
                
                {/* Overlay dégradé pour le texte mobile (uniquement visible sur mobile) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden"></div>
                
                {/* Dégradé subtil pour le fondu desktop */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-green-50 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Badge Impact (Desktop uniquement) */}
              <div className="absolute -left-4 bottom-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-green-100 hidden lg:flex items-center space-x-3 z-30">
                <div className="bg-green-600 p-2 rounded-lg text-white">
                  <Leaf size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Impact</p>
                  <p className="text-xs font-extrabold text-gray-800">Burkina Faso</p>
                </div>
              </div>
            </motion.div>

            {/* --- SECTION TEXTE : Overlay sur mobile, Colonne gauche sur desktop --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              /* Sur mobile: position absolute pour couvrir l'image | Sur desktop: position relative standard */
              className="absolute inset-0 flex flex-col justify-end p-8 pb-12 md:relative md:inset-auto md:p-0 md:block md:order-1 z-20"
            >
              <div className="space-y-4 md:space-y-6 text-center md:text-left">
                <div className="inline-flex items-center space-x-2 bg-green-500/20 md:bg-green-100 backdrop-blur-md md:backdrop-blur-none text-green-100 md:text-green-700 px-4 py-1.5 rounded-full text-xs font-bold mx-auto md:mx-0 border border-white/20 md:border-transparent">
                  <Leaf size={14} />
                  <span>{slides[current].badge}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white md:text-green-900 leading-[1.1] tracking-tight">
                  {slides[current].title} <br />
                  <span className={`${slides[current].color} brightness-125 md:brightness-100 font-light italic text-3xl md:text-5xl block mt-1`}>
                    {slides[current].subtitle}
                  </span>
                </h1>

                <p className="text-sm md:text-lg text-gray-200 md:text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                  {slides[current].desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
                  <Link 
                    to={slides[current].link}
                    className="group bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-green-900/20 hover:bg-green-700 transition-all flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <span>{slides[current].btnText}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    to="/don"
                    className="bg-white/10 md:bg-white backdrop-blur-md md:backdrop-blur-none text-white md:text-gray-700 border border-white/30 md:border-gray-100 px-7 py-3.5 rounded-xl font-bold hover:bg-white/20 md:hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center"
                  >
                    Faire un don
                  </Link>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Boutons de Navigation (Visibles uniquement sur Desktop) */}
      <div className="hidden md:flex absolute inset-0 items-center justify-between px-6 z-20 pointer-events-none">
        <button onClick={prevSlide} className="p-2.5 rounded-full bg-white/60 border border-white hover:bg-white text-green-800 shadow-md pointer-events-auto active:scale-95 transition-all focus:outline-none">
          <ChevronLeft size={22} />
        </button>
        <button onClick={nextSlide} className="p-2.5 rounded-full bg-white/60 border border-white hover:bg-white text-green-800 shadow-md pointer-events-auto active:scale-95 transition-all focus:outline-none">
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Indicateurs de progression (Pagination) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrent(index)} 
            className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-green-500" : "w-2 bg-green-200/50 md:bg-green-200"}`} 
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;