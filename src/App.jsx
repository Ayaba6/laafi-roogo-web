import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop' // Le bouton flottant
import Home from './pages/Home'
import About from './pages/About'
import Actions from './pages/Actions'
import Contact from './pages/Contact'
import Don from './pages/Don'
import Festival from './pages/Festival'

// Utilitaire pour remonter en haut de page lors du changement de route
const ScrollToTopOnNavigation = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      {/* Réinitialise le scroll à chaque changement de page */}
      <ScrollToTopOnNavigation />
      
      <div className="min-h-screen bg-gray-50 flex flex-col relative">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/don" element={<Don />} />
          </Routes>
        </main>

        <Footer /> 

        {/* Le bouton flottant qui apparaît au scroll sur toutes les pages */}
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App