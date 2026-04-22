import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Plantes Répertoriées", value: "150+" },
  { label: "Tradipraticiens", value: "45" },
  { label: "Hectares Protégés", value: "120" },
  { label: "Bénéficiaires", value: "5k+" }
];

const Stats = () => {
  return (
    /* CHANGEMENT COULEUR : Utilisation d'un dégradé émeraude très sombre au lieu du noir */
    <section className="py-24 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 relative overflow-hidden">
      
      {/* Cercles lumineux décoratifs pour donner de la profondeur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Valeur numérique en blanc éclatant ou vert fluo léger */}
              <h4 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </h4>
              
              {/* Label en vert menthe pour bien ressortir */}
              <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                {stat.label}
              </p>

              {/* Petite barre décorative sous chaque stat */}
              <div className="w-8 h-1 bg-emerald-500 mx-auto mt-4 rounded-full opacity-50"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;