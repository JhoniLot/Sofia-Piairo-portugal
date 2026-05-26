import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Tratamentos', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo" style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.45rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
            Sofia Piairo
          </span>
          <span style={{ fontSize: '0.65rem', letterSpacing: '3px', color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', marginTop: '-3px' }}>
            Estética Avançada
          </span>
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
          <a href="https://zappysoftware.com/m/sofiapiairoestetica#items" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Agendar</a>
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu open"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="https://zappysoftware.com/m/sofiapiairoestetica#items" target="_blank" rel="noreferrer" className="btn btn-primary" style={{textAlign: 'center', marginTop: '1rem'}} onClick={() => setMobileMenuOpen(false)}>Agendar</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
