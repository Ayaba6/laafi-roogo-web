import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Search, TreePine } from 'lucide-react';

const objectifs = [
  { 
    title: "Valorisation", 
    desc: "Intégrer les tradipraticiens dans le système de santé moderne.",
    icon: Sparkles,
    // Palette Verte (Santé/Tradition)
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
    accent: "bg-green-500"
  },
  { 
    title: "Éducation", 
    desc: "Sensibiliser sur l'utilisation responsable des plantes médicinales.",
    icon: GraduationCap,
    // Palette Ambre/Jaune (Savoir/Lumière)
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    text: "text-amber-700",
    border: "border-amber-200",
    accent: "bg-amber-500"
  },
  { 
    title: "Recherche", 
    desc: "Documenter et préserver les savoirs traditionnels de santé.",
    icon: Search,
    // Palette Bleue/Teal (Science/Analyse)
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
    text: "text-sky-700",
    border: "border-sky-200",
    accent: "bg-sky-500"
  },
  { 
    title: "Environnement", 
    desc: "Protéger la nature pour une production durable de plantes.",
    icon: TreePine,
    // Palette Émeraude (Nature/Forêt)
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    text: "text-emerald-700",
    border: "border-emerald-200",
    accent: "bg-emerald-500"
  }
];

const Objectifs = () => {
  return (
    <section className="py-20 md:py-24 px-4 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="px-4 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-4">
            Notre Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center">
            Nos Objectifs <span className="font-light italic text-green-600">Essentiels</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectifs.map((obj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-[2rem] border ${obj.border} ${obj.bg} transition-all duration-300 md:bg-white md:border-slate-100 md:hover:shadow-xl`}
            >
              {/* Cercle de couleur en fond au survol (Desktop) */}
              <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full ${obj.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              {/* Icône avec sa couleur dédiée */}
              <div className="mb-6">
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shadow-sm 
                  ${obj.iconBg} ${obj.text} 
                  transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <obj.icon size={28} strokeWidth={2} />
                </div>
              </div>
              
              {/* Titre et Description */}
              <div className="relative z-10">
                <h3 className={`font-bold text-xl mb-3 ${obj.text} md:text-slate-800 md:group-hover:${obj.text}`}>
                  {obj.title}
                </h3>
                <p className="text-slate-600 md:text-slate-500 leading-relaxed text-sm font-medium">
                  {obj.desc}
                </p>
              </div>

              {/* Petit indicateur de progression coloré en bas */}
              <div className={`absolute bottom-6 left-8 h-1 w-10 rounded-full ${obj.accent} opacity-40 md:opacity-20 group-hover:w-20 group-hover:opacity-100 transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectifs;