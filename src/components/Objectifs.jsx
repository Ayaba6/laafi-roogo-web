import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Search, TreePine, ArrowUpRight } from 'lucide-react';

const objectifs = [
  { 
    title: "Valorisation", 
    desc: "Intégrer les tradipraticiens dans le système de santé moderne.",
    icon: Sparkles,
    color: "green"
  },
  { 
    title: "Éducation", 
    desc: "Sensibiliser sur l'utilisation responsable des plantes médicinales.",
    icon: GraduationCap,
    color: "emerald"
  },
  { 
    title: "Recherche", 
    desc: "Documenter et préserver les savoirs traditionnels de santé.",
    icon: Search,
    color: "teal"
  },
  { 
    title: "Environnement", 
    desc: "Protéger la nature pour une production durable de plantes.",
    icon: TreePine,
    color: "lime"
  }
];

const Objectifs = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-slate-50/50">
      {/* Background Decor - Formes organiques diffuses */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header avec badge stylisé */}
        <div className="flex flex-col items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-green-200"
          >
            Engagement & Vision
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 text-center tracking-tight"
          >
            Nos Objectifs <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 font-light">Stratégiques</span>
          </motion.h2>
        </div>
        
        {/* Grille de cartes optimisée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectifs.map((obj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 overflow-hidden"
            >
              {/* Numéro en arrière-plan pour le style "Editorial" */}
              <span className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 group-hover:text-green-50 transition-colors duration-500 select-none -z-10">
                0{index + 1}
              </span>

              {/* Icône flottante avec ombre de couleur */}
              <div className="relative mb-8">
                <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white group-hover:bg-green-600 group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 shadow-xl shadow-slate-200 group-hover:shadow-green-200">
                  <obj.icon size={28} strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Texte */}
              <div className="relative z-10">
                <h3 className="font-bold text-2xl text-slate-800 mb-3 group-hover:text-green-700 transition-colors">
                  {obj.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">
                  {obj.desc}
                </p>
              </div>

              {/* Barre de progression/déco au bas de la carte */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-green-500 to-emerald-400 group-hover:w-full transition-all duration-700" />
              
              {/* Petit bouton d'action discret au survol */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="text-green-600" size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer de section optionnel */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm italic">
            "S'appuyer sur le passé pour soigner le futur."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Objectifs;