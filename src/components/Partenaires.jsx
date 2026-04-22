import React from 'react';
import { motion } from 'framer-motion';

const partenaires = [
  { name: "Ministère de la Santé", logo: "https://via.placeholder.com/150x80?text=SANTÉ" },
  { name: "Environnement BF", logo: "https://via.placeholder.com/150x80?text=ENVIRONNEMENT" },
  { name: "OMS Burkina", logo: "https://via.placeholder.com/150x80?text=OMS" },
  { name: "Union Européenne", logo: "https://via.placeholder.com/150x80?text=UE" },
  { name: "UNESCO", logo: "https://via.placeholder.com/150x80?text=UNESCO" },
  { name: "ONG Locale", logo: "https://via.placeholder.com/150x80?text=ONG" },
];

// On double la liste pour créer l'effet de boucle infinie sans saut
const doublePartenaires = [...partenaires, ...partenaires];

const Partenaires = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h3 className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
          Ils nous font confiance
        </h3>
      </div>

      {/* Conteneur du Carrousel avec dégradé sur les bords pour l'effet "fondu" */}
      <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-gray-50 after:to-transparent">
        
        <motion.div 
          className="flex space-x-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {doublePartenaires.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partenaires;