import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, GraduationCap, Globe, BookOpen, ArrowRight, Activity } from 'lucide-react';

const actionsList = [
  {
    title: "Médecine Traditionnelle",
    desc: "Valoriser les savoirs ancestraux et intégrer les tradipraticiens dans le parcours de soin moderne pour une meilleure prise en charge.",
    icon: <Leaf className="text-emerald-500" size={32} />,
    color: "from-emerald-50 to-white",
    border: "border-emerald-100"
  },
  {
    title: "Éducation & Formation",
    desc: "Former et certifier les tradipraticiens pour garantir des soins de qualité et sensibiliser sur l'usage des plantes.",
    icon: <GraduationCap className="text-blue-500" size={32} />,
    color: "from-blue-50 to-white",
    border: "border-blue-100"
  },
  {
    title: "Protection Environnementale",
    desc: "Garantir une production durable des plantes médicinales en protégeant l'écosystème et les forêts galeries du Burkina.",
    icon: <Globe className="text-green-500" size={32} />,
    color: "from-green-50 to-white",
    border: "border-green-100"
  },
  {
    title: "Recherche & Documentation",
    desc: "Documenter les savoirs traditionnels pour les préserver et les partager avec les générations futures via des bases de données.",
    icon: <BookOpen className="text-orange-500" size={32} />,
    color: "from-orange-50 to-white",
    border: "border-orange-100"
  }
];

const Actions = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION ACTIONS --- */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Nos Actions sur <br />
              <span className="text-green-400 italic">le Terrain</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              L'A.L.R.B déploie des solutions concrètes pour une santé inclusive, 
              mêlant héritage culturel et rigueur scientifique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GRID ACTIONS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {actionsList.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-8 md:p-10 rounded-[3rem] bg-gradient-to-br ${action.color} border ${action.border} shadow-sm group transition-all duration-500`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-8 p-5 bg-white rounded-2xl w-fit shadow-xl shadow-slate-200/50 group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
                  {action.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium mb-6">
                  {action.desc}
                </p>

                <div className="mt-auto flex items-center text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-green-600 transition-colors">
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION COLLABORATION (CTA) --- */}
      <section className="pb-24 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-7xl mx-auto relative rounded-[4rem] bg-slate-900 overflow-hidden p-8 md:p-20"
        >
          {/* Déco abstraite */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/10 skew-x-12 translate-x-20"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-green-400 mb-6">
                <Activity size={24} />
                <span className="font-black uppercase tracking-[0.2em] text-xs">Synergie Médicale</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Pour une santé <br />
                <span className="text-green-400">complémentaire</span> et sûre.
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Nous créons des ponts entre la médecine moderne et traditionnelle 
                pour garantir une couverture sanitaire de qualité à tous les Burkinabè.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-500 text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 active:scale-95">
                  Devenir partenaire
                </button>
                <button className="bg-transparent border-2 border-slate-700 text-white px-10 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all active:scale-95">
                  Nos rapports d'impact
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="bg-slate-800 rounded-[3rem] p-4 border border-slate-700 transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800" 
                  alt="Collaboration" 
                  className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Actions;