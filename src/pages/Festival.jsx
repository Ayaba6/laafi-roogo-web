import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, Users, Beaker, Leaf, Mic2, 
  Trophy, ShieldCheck, HeartPulse, ArrowRight, Download 
} from 'lucide-react';

const Festival = () => {
  const stats = [
    { label: "Durée", value: "7 Jours", sub: "consécutifs" },
    { label: "Lieu", value: "Boussé", sub: "Burkina Faso" },
    { label: "Budget", value: "20M+", sub: "FCFA prévisionnels" },
    { label: "Portée", value: "Sous-région", sub: "Mali, Niger, CI, etc." }
  ];

  const activities = [
    {
      image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=800",
      title: "Exposition & Foire",
      text: "Stands d'herboristes et vente de produits naturels de la pharmacopée locale."
    },
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800",
      title: "Colloques & Débats",
      text: "Rencontres scientifiques entre médecine moderne et savoirs ancestraux."
    },
    {
      image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=800",
      title: "Ateliers Pratiques",
      text: "Démonstrations de préparation de remèdes et transmission de savoirs."
    },
    {
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800",
      title: "Espace Culturel",
      text: "Prestations artistiques, contes et rituels de guérison traditionnels."
    },
    {
      image: "https://images.unsplash.com/photo-1544919396-12056637841c?q=80&w=800",
      title: "Activités Sportives",
      text: "Course cycliste, football et aérobic pour une santé par le mouvement."
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
      title: "Santé Durable",
      text: "Sensibilisation sur l'encadrement juridique et l'avenir de la tradition."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen pt-16">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 bg-emerald-950 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="bg-yellow-500/20 text-yellow-500 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-500/30">
                1ère Édition • Octobre 2025
              </span>
              <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
                FESTIVAL <br />
                <span className="text-emerald-400 font-serif italic">LAAFI ROOGO</span>
              </h1>
              <div className="mt-8 p-6 border-l-4 border-yellow-500 bg-white/5 backdrop-blur-sm rounded-r-2xl">
                <p className="text-xl font-bold italic text-emerald-100">
                  « Médecine traditionnelle et savoirs endogènes : valoriser, encadrer et transmettre pour une santé durable »
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="hidden lg:block">
              <div className="relative p-4 border border-white/10 rounded-[3rem] bg-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1614748866874-8a4426c5409e?q=80&w=800" 
                  alt="Savoirs traditionnels" 
                  className="rounded-[2.5rem] brightness-90 hover:brightness-100 transition-all duration-700 h-[500px] w-full object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CHIFFRES CLÉS --- */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-xl border border-emerald-50 text-center">
              <p className="text-3xl font-black text-emerald-700">{s.value}</p>
              <p className="text-[10px] uppercase tracking-tighter font-bold text-slate-400">{s.label}</p>
              <p className="text-xs text-slate-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DESCRIPTION --- */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-black text-slate-900 mb-8 underline decoration-yellow-500 decoration-4 underline-offset-8">
          Pourquoi ce festival ?
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          La médecine traditionnelle est un patrimoine immatériel riche dont la contribution à la santé publique 
          est incontestable. Le Festival Laafi Roogo se veut un cadre d’échanges pour favoriser sa reconnaissance 
          et son intégration dans le système de santé national et régional.
        </p>
      </section>

      {/* --- ACTIVITÉS PHARES (IMAGES DE FOND) --- */}
      <section className="py-20 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Au Cœur du Festival</h2>
            <p className="text-emerald-600 font-bold mt-2">7 jours d'immersion totale à Boussé</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, index) => (
              <ActivityCard 
                key={index}
                image={act.image}
                title={act.title}
                text={act.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- APPEL AUX PARTENAIRES --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Soutenez l'initiative
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Avec un budget global de <span className="text-yellow-400 font-bold">20 376 000 FCFA</span>, 
            nous recherchons des partenaires institutionnels et privés pour bâtir ce rendez-vous incontournable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black flex items-center space-x-2 hover:bg-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20">
              <Download size={20} />
              <span>Télécharger le dossier complet</span>
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all">
              Devenir Partenaire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ActivityCard = ({ image, title, text }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="relative h-[400px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl"
  >
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="w-12 h-1 bg-yellow-500 mb-4 transform origin-left transition-all duration-500 group-hover:w-full"></div>
      <h3 className="text-2xl font-black text-white mb-2 leading-tight uppercase tracking-wider">{title}</h3>
      <p className="text-slate-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        {text}
      </p>
    </div>
  </motion.div>
);

export default Festival;