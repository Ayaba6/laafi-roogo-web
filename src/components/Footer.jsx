import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Share2, 
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COLONNE 1 : LOGO & DESCRIPTION */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white text-2xl font-bold">
              <HeartHandshake className="text-green-500" size={32} />
              <span>Laafi Roogo</span>
            </Link>
            <p className="text-sm leading-relaxed">
              "Maison Santé" — Association burkinabé dédiée à la promotion de la santé par les plantes et à la protection de l'environnement.
            </p>
            {/* Remplacement des icônes de réseaux sociaux par des icônes génériques sûres */}
            <div className="flex space-x-4 pt-2">
              <a href="#" title="Facebook" className="p-2 bg-gray-800 rounded-full hover:text-green-500 transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" title="Twitter" className="p-2 bg-gray-800 rounded-full hover:text-green-500 transition-colors">
                <ExternalLink size={18} />
              </a>
              <a href="#" title="Instagram" className="p-2 bg-gray-800 rounded-full hover:text-green-500 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* COLONNE 2 : LIENS RAPIDES */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-green-500 transition">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:text-green-500 transition text-gray-300">À Propos</Link></li>
              <li><Link to="/actions" className="hover:text-green-500 transition text-gray-300">Nos Actions</Link></li>
              <li><Link to="/don" className="text-green-500 font-semibold hover:underline">Soutenir l'A.L.R.B</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT DIRECT */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-500 shrink-0" />
                <span>Ouagadougou, Burkina Faso</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-green-500 shrink-0" />
                <span>+226 64 41 87 95 / 71 67 30 57</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-green-500 shrink-0" />
                <span>contact@laafiroogoburkina.org</span>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 : MISSION */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Notre Engagement</h3>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-sm italic text-gray-400 mb-3">
                "Valoriser les médecines traditionnelles et intégrer les tradipraticiens dans le système de santé moderne."
              </p>
              <div className="flex items-center text-xs text-green-500 font-medium">
                <Globe size={14} className="mr-2" />
                Action Nationale (Burkina Faso)
              </div>
            </div>
          </div>

        </div>

        {/* BARRE DE COPYRIGHT */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Association Laafi Roogo Burkina. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition">Mentions légales</a>
            <a href="#" className="hover:text-white transition">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;