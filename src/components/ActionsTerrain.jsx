import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Beaker, Users, GraduationCap, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom'; 

import imgFormation from '../assets/img-formation.jpg'; 
import imgLabo from '../assets/img-labo.jpg';
import imgLegal from '../assets/img-legal.jpg';
import imgFestival from '../assets/img-festival.jpg';

const projects = [
  {
    title: "Formation des Tradipraticiens",
    category: "Capacitation",
    desc: "Programmes de renforcement sur les bonnes pratiques de récolte, le dosage précis et l'hygiène de transformation.",
    icon: <GraduationCap size={20} />,
    image: imgFormation,
    gridSize: "md:col-span-8"
  },
  {
    title: "Recherches & Labo",
    category: "Validation",
    desc: "Analyses scientifiques pour valider l'innocuité et l'efficacité des remèdes traditionnels.",
    icon: <Beaker size={20} />,
    image: imgLabo,
    gridSize: "md:col-span-4"
  },
  {
    title: "Appui à la Régularisation",
    category: "Institutionnel",
    desc: "Accompagnement juridique et administratif pour l'obtention des agréments officiels.",
    icon: <ShieldCheck size={20} />,
    image: imgLegal, 
    gridSize: "md:col-span-4"
  },
  {
    title: "Festival Laafi Roogo",
    category: "Mise en Relation",
    desc: "Le grand carrefour annuel où population, chefs coutumiers, acteurs de la santé et tradipraticiens célèbrent la santé par les plantes.",
    icon: <Star size={20} />,
    image: imgFestival,
    gridSize: "md:col-span-8",
    link: "/festival"
  }
];

const ActionsTerrain = () => {
  // Logique du décompte pour le 23 Novembre 2026
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const targetDate = new Date('November 23, 2026 08:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header avec Décompte */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-green-600 font-black uppercase tracking-widest text-xs"
            >
              Impact Territorial
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight"
            >
              Ancrer la santé dans <br /> 
              <span className="text-green-600 italic">notre héritage culturel.</span>
            </motion.h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* Widget Décompte */}
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-2 pr-4 rounded-2xl">
                <div className="flex gap-2">
                    {[
                        { label: 'J', value: timeLeft.days },
                        { label: 'H', value: timeLeft.hours },
                        { label: 'M', value: timeLeft.mins }
                    ].map((unit, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-white shadow-sm border border-slate-100 rounded-xl px-3 py-1">
                            <span className="text-slate-900 font-black text-lg leading-none">{unit.value}</span>
                            <span className="text-slate-400 text-[10px] font-bold uppercase">{unit.label}</span>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:block">
                    <p className="text-[10px] font-black text-slate-400 uppercase leading-tight">Avant le début<br/><span className="text-green-600">du festival</span></p>
                </div>
            </div>

            {/* Bouton Festival */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/festival" 
                className="bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold flex items-center space-x-3 shadow-xl shadow-slate-200 transition-all hover:bg-slate-800"
              >
                <span>Festival 2026</span>
                <ArrowUpRight size={20} className="text-green-400" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[340px]">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${proj.gridSize} relative rounded-[2.5rem] overflow-hidden group shadow-lg shadow-slate-100 hover:shadow-2xl transition-all duration-700 bg-slate-100`}
            >
              {proj.link && (
                <Link to={proj.link} className="absolute inset-0 z-30 cursor-pointer" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 opacity-90 md:opacity-85 md:group-hover:opacity-75 transition-opacity" />
              
              {proj.image && (
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[4s] ease-out" 
                />
              )}

              <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end">
                <div className="flex items-center space-x-2 bg-green-600 text-white w-fit px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                  {proj.icon}
                  <span>{proj.category}</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                  {proj.title}
                </h4>
                
                <p className="text-white/80 text-sm md:text-base max-w-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 font-medium">
                  {proj.desc}
                </p>
              </div>

              {proj.title.includes("Festival") && (
                <div className="absolute top-6 left-6 z-20 bg-amber-400 text-amber-900 px-3 py-1 rounded-lg text-[10px] font-black uppercase flex items-center space-x-1 animate-pulse">
                  <Star size={12} fill="currentColor" />
                  <span>Événement Phare</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionsTerrain;