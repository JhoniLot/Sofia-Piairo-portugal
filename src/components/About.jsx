import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <motion.div 
          className="about-image-side"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-img-frame">
            <img src="/contact.png" alt="Sofia Piairo Centro de Estética" className="about-img" />
          </div>
        </motion.div>

        <motion.div 
          className="about-content-side"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="about-tag">Quem Somos</span>
          <h2 className="about-title">Sofia Piairo</h2>
          <h3 className="about-subtitle">Centro de Estética Avançada em Guimarães</h3>
          
          <p className="about-text">
            No <strong>Sofia Piairo - Centro de Estética Avançada</strong>, acreditamos que a verdadeira beleza reside na harmonia e no bem-estar pessoal. Com localização privilegiada em S. João da Ponte, Guimarães, o nosso espaço foi desenhado para proporcionar uma experiência de total tranquilidade e cuidado exclusivo.
          </p>
          <p className="about-text">
            Sob a liderança de uma equipa apaixonada e altamente qualificada, especializamo-nos em tratamentos estéticos avançados. Combinamos tecnologia de ponta mundial — como o sistema de modelação corporal <strong>LPG Endermologie (Cellu M6)</strong> — com uma abordagem totalmente personalizada às necessidades e objetivos de cada cliente.
          </p>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon"><Sparkles size={20} /></div>
              <div>
                <h4>Tecnologia Premium</h4>
                <p>Equipamentos certificados de estética avançada para resultados seguros.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Heart size={20} /></div>
              <div>
                <h4>Atendimento Exclusivo</h4>
                <p>Cada plano de tratamento é desenhado sob medida após avaliação criteriosa.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><ShieldCheck size={20} /></div>
              <div>
                <h4>Profissionalismo & Simpatia</h4>
                <p>Reconhecidos pelos nossos clientes pelo ambiente acolhedor e cuidado minucioso.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
