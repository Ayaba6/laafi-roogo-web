import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Scale, Landmark, Info, ArrowDown } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION - Style "Hero Minimaliste" */}
      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute inset-0 bg-[grid-row-40px] bg-[grid-col-40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-widest border border-green-200">
              Institutionnel
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              L'Association <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 italic">
                Laafi Roogo Burkina
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Une organisation engagée pour la santé et la biodiversité, ancrée dans les valeurs de solidarité burkinabé.
            </p>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 flex justify-center text-slate-300"
          >
            <ArrowDown size={32} />
          </motion.div>
        </div>
      </section>

      {/* CORE INFO SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Identité & Sens */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50">
              <div className="absolute -top-6 -left-6 h-20 w-20 bg-green-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-green-200">
                <Info size={32} />
              </div>
              
              <h2 className="text-3xl font-black text-slate-900 mb-6 pl-8">Dénomination & Nature</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed pl-8">
                <p>
                  L'<strong>ASSOCIATION LAAFI ROOGO BURKINA (A.L.R.B)</strong> est une organisation 
                  à but non lucratif, laïque et apolitique.
                </p>
                <div className="p-6 bg-green-50 rounded-2xl border-l-8 border-green-500">
                  <p className="italic text-green-900 font-medium">
                    "Le nom <span className="font-black">« Laafi Roogo »</span> signifie 
                    <span className="font-black text-green-700"> « Maison Santé »</span> en langue mooré, 
                    symbolisant notre foyer de bien-être et de guérison par la nature."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-xl">
                <MapPin className="text-green-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Siège Social</h3>
                <p className="text-slate-400 leading-relaxed">
                  Établi à <strong>Ouagadougou</strong>, avec un rayon d'action couvrant l'ensemble du 
                  territoire du Burkina Faso.
                </p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 shadow-sm">
                <ShieldCheck className="text-emerald-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Durée</h3>
                <p className="text-slate-600 leading-relaxed">
                  Notre mission est inscrite dans la continuité avec une <strong>durée illimitée</strong>, 
                  pour un impact générationnel.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cadre Juridique - Style "Certificat" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 p-8 rounded-[3rem] bg-white border-2 border-slate-900 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]">
              <div className="flex items-center space-x-3 mb-8">
                <Scale className="text-slate-900" size={28} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Cadre Juridique</h2>
              </div>
              
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                Conformité Légale
              </p>
              
              <ul className="space-y-6">
                {[
                  { text: "Régie par la Loi n° 064-2015/CNT du 20/10/2015", icon: <Landmark size={18} /> },
                  { text: "Portant liberté d’association au Burkina Faso", icon: <ShieldCheck size={18} /> },
                  { text: "Enregistrée auprès des autorités compétentes", icon: <Scale size={18} /> }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 group">
                    <div className="mt-1 h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 font-medium leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-green-600 font-black text-xs uppercase tracking-widest">
                  <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                  <span>Organisation Reconnue</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER CTA de la page About */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Vous souhaitez consulter nos statuts complets ?</h2>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-green-600 transition-all shadow-xl">
            Télécharger le document PDF
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;