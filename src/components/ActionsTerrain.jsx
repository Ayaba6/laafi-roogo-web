import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Beaker, Users } from 'lucide-react';

const projects = [
  {
    title: "Le Jardin Botanique de Saaba",
    category: "Conservation",
    desc: "Un sanctuaire dédié à la préservation des espèces médicinales menacées du Burkina Faso.",
    icon: <MapPin size={20} />,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200",
    gridSize: "md:col-span-8"
  },
  {
    title: "Recherche & Labo",
    category: "Science",
    desc: "Analyse des principes actifs des plantes locales.",
    icon: <Beaker size={20} />,
    image: "https://images.unsplash.com/photo-1579152276503-68fe28686210?q=80&w=800",
    gridSize: "md:col-span-4"
  },
  {
    title: "Formations Communautaires",
    category: "Impact",
    desc: "Plus de 500 personnes sensibilisées à l'utilisation sécurisée des plantes.",
    icon: <Users size={20} />,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    gridSize: "md:col-span-12"
  }
];

const ActionsTerrain = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header de section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-green-600 font-black uppercase tracking-widest text-xs"
            >
              Sur le terrain
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight"
            >
              Transformer la vision <br /> 
              <span className="text-green-600 italic">en impact réel.</span>
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2 text-slate-900 font-bold border-b-2 border-green-500 pb-1 hover:text-green-600 transition-colors"
          >
            <span>Explorer tous nos projets</span>
            <ArrowUpRight size={18} />
          </motion.button>
        </div>

        {/* Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${proj.gridSize} relative rounded-[2.5rem] overflow-hidden group shadow-lg shadow-slate-100 hover:shadow-2xl transition-all duration-700`}
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity" />
              
              {/* Image de fond */}
              <img 
                src={proj.image} 
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]" 
              />

              {/* Contenu */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-4 border border-white/20">
                  {proj.icon}
                  <span>{proj.category}</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                  {proj.title}
                </h4>
                
                <p className="text-white/80 text-sm max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-medium leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              {/* Bouton Action discret */}
              <div className="absolute top-8 right-8 z-20 h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionsTerrain;