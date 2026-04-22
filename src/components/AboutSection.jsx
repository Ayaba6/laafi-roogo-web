import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const points = [
    "Promotion de la pharmacopée locale",
    "Accompagnement des tradipraticiens",
    "Protection des forêts galeries"
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* GAUCHE : IMAGE VISUELLE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl bg-green-100">
              {/* Remplace l'URL par ton image locale si besoin */}
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200" alt="Nature Burkina" className="w-full h-[500px] object-cover" />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-green-600 text-white p-8 rounded-[2rem] shadow-xl z-20 hidden md:block"
            >
              <p className="text-4xl font-black italic">10+</p>
              <p className="text-sm font-bold opacity-80 uppercase tracking-tighter">Ans d'engagement</p>
            </motion.div>
          </motion.div>

          {/* DROITE : TEXTE */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-green-600 font-black uppercase tracking-widest text-xs">Qui sommes-nous</h3>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Une passerelle entre <span className="text-green-600 italic">tradition</span> et modernité.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                LAAFI ROOGO œuvre au cœur du Burkina Faso pour redonner ses lettres de noblesse à la médecine verte tout en protégeant notre biodiversité précieuse.
              </p>
            </div>

            <div className="grid gap-4">
              {points.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 group">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;