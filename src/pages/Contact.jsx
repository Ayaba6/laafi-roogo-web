import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- HEADER --- */}
      <section className="relative pt-32 pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-black uppercase tracking-[0.3em] text-xs"
          >
            Parlons ensemble
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mt-4 mb-6 tracking-tight"
          >
            Contactez <span className="text-green-600 italic">l'A.L.R.B</span>
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Une question sur la pharmacopée ? Un projet de partenariat ? Notre équipe vous répond dans les meilleurs délais.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- COLONNE GAUCHE : INFOS --- */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center">
                <span className="w-10 h-1 text-green-500 bg-green-500 mr-4 rounded-full inline-block"></span>
                Nos Coordonnées
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: <MapPin />, title: "Adresse", detail: "Secteur 23, Paspanga, Ouagadougou, Burkina Faso" },
                  { icon: <Phone />, title: "Téléphone", detail: "+226 71 67 30 57 / +226 64 41 87 95" },
                  { icon: <Mail />, title: "Email", detail: "contact@laafiroogoburkina.org" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start p-6 rounded-[2rem] bg-slate-50 border border-slate-100 transition-colors hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                  >
                    <div className="p-4 bg-white rounded-2xl shadow-sm text-green-600 mr-6">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-1">{item.title}</h4>
                      <p className="text-slate-800 font-bold text-lg">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Heures d'ouverture avec style "Badge" */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
              <Clock className="absolute -right-4 -bottom-4 text-white/5" size={150} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Clock className="mr-3 text-green-400" size={20} />
                  Horaires d'accueil
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400 font-medium">Lundi - Vendredi</span>
                    <span className="font-bold">08h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Samedi - Dimanche</span>
                    <span className="text-green-400 font-bold uppercase text-xs tracking-tighter">Sur rendez-vous</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE : FORMULAIRE --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <form className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/60 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-400"></div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Nom complet</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-green-500 transition-all font-medium" 
                    placeholder="Jean Ouédraogo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email / Téléphone</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-green-500 transition-all font-medium"
                    placeholder="exemple@mail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Objet du message</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-green-500 transition-all font-medium appearance-none">
                  <option>Demande d'information</option>
                  <option>Partenariat institutionnel</option>
                  <option>Soutien / Don</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Votre Message</label>
                <textarea 
                  rows="5" 
                  className="w-full bg-slate-50 border-none rounded-[2rem] p-6 focus:ring-2 focus:ring-green-500 transition-all font-medium outline-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="group w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center justify-center space-x-3 active:scale-95"
              >
                <span>Envoyer ma demande</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* --- MINI MAP / PLACEHOLDER --- */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto h-[400px] rounded-[4rem] bg-slate-100 overflow-hidden relative border border-slate-200 shadow-inner">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                <Globe size={48} className="mb-4 animate-spin-slow opacity-20" />
                <p className="font-bold uppercase tracking-widest text-xs italic">Carte interactive du siège à Ouagadougou</p>
            </div>
            {/* Intègre ton iframe Google Maps ici si besoin */}
        </div>
      </section>
    </div>
  );
};

export default Contact;