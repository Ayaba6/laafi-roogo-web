import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// 1. IMPORTATION DES IMAGES LOCALES
import img1 from '../assets/hero1.jpg'; 
import img2 from '../assets/hero2.jpg';
import img3 from '../assets/hero3.jpg';

const slides = [
  {
    badge: "Association Apolitique & Laïque",
    title: "LAAFI ROOGO",
    subtitle: "BURKINA",
    desc: '"La Maison Santé" — Œuvrer pour la promotion de la santé par les plantes et la protection de l\'environnement au Burkina Faso.',
    btnText: "Découvrir nos missions",
    link: "/actions",
    color: "text-green-600",
    image: img1
  },
  {
    badge: "Savoirs Traditionnels",
    title: "MÉDECINE",
    subtitle: "VERTE",
    desc: "Valoriser l'expertise des tradipraticiens pour un système de santé intégré et inclusif au Burkina Faso.",
    btnText: "Nos Actions",
    link: "/actions",
    color: "text-emerald-600",
    image: img2
  },
  {
    badge: "Engagement Durable",
    title: "PROTÉGER",
    subtitle: "LA NATURE",
    desc: "Préserver la biodiversité locale pour garantir une production durable de plantes médicinales pour les générations futures.",
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
    /* AJUSTEMENT : pt-12 est le juste milieu pour laisser respirer sans trop espacer */
    <section className="relative min-h-[85vh] flex items-center pt-12 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      
      {/* Cercles décoratifs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

      {/* AJUSTEMENT : py-16 pour un équilibre parfait sur desktop et mobile */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <AnimatePresence mode="wait">
          <div key={current} className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center text-center md:text-left">
            
            {/* --- GAUCHE : TEXTE --- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 md:order-1"
            >
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                <Leaf size={16} />
                <span>{slides[current].badge}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-green-900 leading-tight tracking-tight">
                {slides[current].title} <br />
                <span className={`${slides[current].color} font-light italic text-4xl md:text-6xl`}>
                  {slides[current].subtitle}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                {slides[current].desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Link 
                  to={slides[current].link}
                  className="group bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-200 hover:bg-green-700 transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <span>{slides[current].btnText}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/don"
                  className="bg-white text-gray-700 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center"
                >
                  Faire un don
                </Link>
              </div>
            </motion.div>

            {/* --- DROITE : IMAGE --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative order-1 md:order-2 group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white bg-green-100">
                <img 
                  src={slides[current].image} 
                  alt={slides[current].title}
                  className="w-full h-[380px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-green-50 via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent"></div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-6 bottom-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-green-100 hidden lg:flex items-center space-x-3 z-20"
              >
                <div className="bg-green-600 p-2 rounded-lg text-white">
                  <Leaf size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Impact</p>
                  <p className="text-sm font-extrabold text-gray-800 tracking-tight">Burkina Faso</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </AnimatePresence>
      </div>

      {/* --- NAVIGATION & INDICATEURS --- */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
        <button onClick={prevSlide} className="p-3 rounded-full bg-white/60 border border-white hover:bg-white text-green-800 shadow-md pointer-events-auto active:scale-95 transition-all"><ChevronLeft size={24} /></button>
        <button onClick={nextSlide} className="p-3 rounded-full bg-white/60 border border-white hover:bg-white text-green-800 shadow-md pointer-events-auto active:scale-95 transition-all"><ChevronRight size={24} /></button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`h-2.5 rounded-full transition-all duration-300 ${current === index ? "w-10 bg-green-600" : "w-2.5 bg-green-200"}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;