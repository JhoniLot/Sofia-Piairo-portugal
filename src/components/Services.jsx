import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Smile, Fingerprint, Activity, Heart, Star, Sun, Wind, Gem, Scissors, Eye } from 'lucide-react';
import './Services.css';

const services = [
  { id: 0, name: 'LPG Endermologie (Cellu M6)', icon: <Sparkles size={24} />, desc: 'Tratamento inovador e indolor para redução de celulite, gordura localizada e firmeza corporal e facial.' },
  { id: 1, name: 'Microneedling', icon: <Activity size={24} />, desc: 'Renovação celular profunda, redução de marcas e estimulação ativa de colagénio.' },
  { id: 2, name: 'Limpeza de Pele Profunda', icon: <Droplets size={24} />, desc: 'Desintoxicação profunda, remoção de impurezas e hidratação celular completa.' },
  { id: 3, name: 'Epilação a Laser Diodo', icon: <Sun size={24} />, desc: 'Eliminação definitiva de pêlos com tecnologia de ponta ultra confortável.' },
  { id: 4, name: 'Epilação a Cera', icon: <Wind size={24} />, desc: 'Método tradicional extremamente preciso com cera hipoalergénica premium.' },
  { id: 5, name: 'Epilação a Linha (Threading)', icon: <Scissors size={24} />, desc: 'Definição perfeita do olhar e remoção delicada de pêlos faciais.' },
  { id: 6, name: 'Unhas de Gel & Verniz Gel', icon: <Gem size={24} />, desc: 'Manicure e pedicure impecáveis com acabamento de alta durabilidade e brilho.' },
  { id: 7, name: 'Drenagem Linfática', icon: <Fingerprint size={24} />, desc: 'Eliminação eficaz de toxinas, redução do inchaço e melhoria da circulação.' },
  { id: 8, name: 'Massagem Terapêutica', icon: <Heart size={24} />, desc: 'Alívio profundo de dores, tensões acumuladas e restabelecimento muscular.' },
  { id: 9, name: 'Massagem de Relaxamento', icon: <Smile size={24} />, desc: 'Uma experiência sensorial única para acalmar a mente e relaxar o corpo.' },
  { id: 10, name: 'Lifting de Pestanas', icon: <Eye size={24} />, desc: 'Realce natural da curvatura e comprimento das suas pestanas sem extensões.' },
  { id: 11, name: 'Hidragloss Labial', icon: <Sparkles size={24} />, desc: 'Revitalização intensa e super hidratação para lábios rejuvenescidos e volumosos.' },
  { id: 12, name: 'Brow Lamination', icon: <Star size={24} />, desc: 'Alinhamento, preenchimento e design moderno para sobrancelhas impactantes.' },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Os Nossos Tratamentos</h2>
        <p className="section-subtitle">Descubra a nossa gama completa de serviços pensados para realçar a sua beleza natural.</p>
        
        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="service-card"
            >
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.name}</h3>
              <p className="service-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '3rem 2rem',
            borderRadius: '2rem',
            background: 'linear-gradient(135deg, var(--bg-alt) 0%, var(--accent) 100%)',
            boxShadow: 'var(--shadow)',
            border: '1px solid rgba(212, 175, 55, 0.15)'
          }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>Preços & Serviços Completos</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Consulte a lista completa de tratamentos, durações e tabelas de preços atualizadas diretamente no nosso portal de agendamento online no Zappy.
          </p>
          <a href="https://zappysoftware.com/m/sofiapiairoestetica#items" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
            Ver Catálogo de Preços & Reservar
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
