import React from 'react';
import { motion } from 'framer-motion';

const Don = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-green-100"
        >
          <div className="text-5xl mb-6">🤝</div>
          <h1 className="text-3xl font-bold text-green-800 mb-4">Soutenir Laafi Roogo</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Chaque contribution aide l'A.L.R.B à valoriser la médecine traditionnelle 
            et à protéger l'environnement au Burkina Faso.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Orange Money */}
            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-200">
              <h3 className="font-bold text-orange-700 mb-2">Orange Money</h3>
              <p className="text-2xl font-mono text-gray-800 font-bold">+226 XX XX XX XX</p>
            </div>
            {/* Moov Money */}
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <h3 className="font-bold text-blue-700 mb-2">Moov Money</h3>
              <p className="text-2xl font-mono text-gray-800 font-bold">+226 XX XX XX XX</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic">
            Pour les virements bancaires ou les partenariats institutionnels, 
            veuillez nous contacter directement via la page contact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Don;