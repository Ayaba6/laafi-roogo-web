import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartHandshake, Sparkles } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LOGO & NOM */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-black text-green-700 hover:text-green-800 transition-colors tracking-tighter"
            >
              <HeartHandshake size={28} className="text-green-600" />
              <span>Laafi Roogo</span>
            </Link>
          </div>
          
          {/* MENU ORDINATEUR */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 font-bold items-center">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-600'} hover:text-green-600 transition py-1 text-sm uppercase tracking-wider`}
            >
              Accueil
            </Link>
            <Link 
              to="/a-propos" 
              className={`${isActive('/a-propos') ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-600'} hover:text-green-600 transition py-1 text-sm uppercase tracking-wider`}
            >
              À Propos
            </Link>
            <Link 
              to="/actions" 
              className={`${isActive('/actions') ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-600'} hover:text-green-600 transition py-1 text-sm uppercase tracking-wider`}
            >
              Actions
            </Link>

            {/* LIEN FESTIVAL - Style spécial */}
            <Link 
              to="/festival" 
              className={`flex items-center space-x-1 px-3 py-1 rounded-full transition text-sm uppercase tracking-wider ${isActive('/festival') ? 'bg-yellow-100 text-yellow-700' : 'text-slate-600 hover:text-yellow-600 hover:bg-yellow-50'}`}
            >
              <Sparkles size={14} className={isActive('/festival') ? 'text-yellow-600' : 'text-yellow-500'} />
              <span>Festival 2026</span>
            </Link>

            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-600'} hover:text-green-600 transition py-1 text-sm uppercase tracking-wider`}
            >
              Contact
            </Link>

            <Link 
              to="/don" 
              className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 shadow-lg shadow-green-200 transition-all active:scale-95"
            >
              Faire un Don
            </Link>
          </div>

          {/* BOUTON MENU MOBILE */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 p-2 focus:outline-none hover:text-green-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full left-0 p-4 space-y-2 animate-in fade-in slide-in-from-top-5">
          <Link to="/" onClick={closeMenu} className={`block py-3 px-4 rounded-xl ${isActive('/') ? 'bg-green-50 text-green-600 font-bold' : 'text-gray-700'}`}>
            Accueil
          </Link>
          <Link to="/a-propos" onClick={closeMenu} className={`block py-3 px-4 rounded-xl ${isActive('/a-propos') ? 'bg-green-50 text-green-600 font-bold' : 'text-gray-700'}`}>
            À Propos
          </Link>
          <Link to="/actions" onClick={closeMenu} className={`block py-3 px-4 rounded-xl ${isActive('/actions') ? 'bg-green-50 text-green-600 font-bold' : 'text-gray-700'}`}>
            Nos Actions
          </Link>
          
          {/* FESTIVAL MOBILE */}
          <Link to="/festival" onClick={closeMenu} className={`block py-3 px-4 rounded-xl flex items-center space-x-2 ${isActive('/festival') ? 'bg-yellow-50 text-yellow-700 font-bold' : 'text-gray-700'}`}>
            <Sparkles size={18} className="text-yellow-500" />
            <span>Festival Laafi Roogo 2026</span>
          </Link>

          <Link to="/contact" onClick={closeMenu} className={`block py-3 px-4 rounded-xl ${isActive('/contact') ? 'bg-green-50 text-green-600 font-bold' : 'text-gray-700'}`}>
            Contact
          </Link>
          
          <Link 
            to="/don" 
            onClick={closeMenu} 
            className="block py-4 bg-slate-900 text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs mt-4 active:scale-95 transition shadow-xl"
          >
            Soutenir l'Association
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;