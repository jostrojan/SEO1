
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ShopifySeo from './pages/ShopifySeo';
import ContactForm from './components/ContactForm';
import { Menu, X, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'SEO Shopify', path: '/seo-en-shopify' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          JOSBARMAR<span className="text-shopify">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-shopify ${
                location.pathname === link.path ? 'text-shopify' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
             onClick={() => document.dispatchEvent(new CustomEvent('toggle-contact'))}
             className="px-4 py-2 bg-zinc-100 text-zinc-950 rounded-full text-xs font-bold hover:bg-white transition-all transform hover:scale-105"
          >
            CONTACTO
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 glass-panel border-b border-white/5 py-8 px-6 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-zinc-400"
            >
              {link.name}
            </Link>
          ))}
          <button 
             onClick={() => {
               setIsMenuOpen(false);
               document.dispatchEvent(new CustomEvent('toggle-contact'));
             }}
             className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-xl text-sm font-bold"
          >
            CONTACTO
          </button>
        </div>
      )}
    </header>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-shopify selection:text-black">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seo-en-shopify" element={<ShopifySeo />} />
          </Routes>
        </main>
        <footer className="py-20 border-t border-white/5 mt-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
            <p className="text-sm">© 2024 JosBarMar. Todos los derechos reservados.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span className="text-xs uppercase tracking-widest font-mono">Expert Shopify SEO</span>
            </div>
          </div>
        </footer>
        <ContactForm />
      </div>
    </HashRouter>
  );
};

export default App;
