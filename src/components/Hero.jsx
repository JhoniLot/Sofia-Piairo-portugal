import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-container">
        <img src="/hero.jpg" alt="Interior do Centro de Estética" className="hero-bg" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-subtitle">Centro de Estética Avançada</span>
          <h1 className="hero-title">Realce a sua beleza com a <span>Sofia Piairo</span></h1>
          <p className="hero-description">
            Especialistas em tratamentos corporais e faciais de alta performance em Guimarães. 
            Recupere o seu bem-estar com tecnologias avançadas e atendimento de excelência.
          </p>
          
          <div className="hero-buttons">
            <a href="https://wa.me/351939346511" target="_blank" rel="noreferrer" className="btn btn-whatsapp">Agendar via WhatsApp</a>
            <a href="#services" className="btn btn-outline" style={{background: 'white', color: 'var(--text-main)', border: '1px solid #e2e8f0'}}>Ver Tratamentos</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
