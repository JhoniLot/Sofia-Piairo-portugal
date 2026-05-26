import React from 'react';
import { MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1rem'}}>Pronta para transformar o seu dia?</h2>
            <p className="contact-desc">
              Sem burocracias nem filas de espera. O seu agendamento é feito 
              de forma rápida e direta pelo nosso WhatsApp. Fale com a nossa equipa agora mesmo!
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="https://wa.me/351939346511" target="_blank" rel="noreferrer" className="btn btn-whatsapp whatsapp-lg" style={{ flex: '1 1 auto' }}>
                <MessageCircle size={24} style={{marginRight: '0.5rem'}} />
                Falar no WhatsApp
              </a>
              <a href="https://zappysoftware.com/m/sofiapiairoestetica#items" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.8rem 1.8rem', borderRadius: '2rem', fontWeight: '500', flex: '1 1 auto', justifyContent: 'center' }}>
                Agendar Online (Zappy)
              </a>
            </div>
            
            <div className="contact-details">
              <div className="detail-item" style={{ alignItems: 'flex-start' }}>
                <MapPin size={20} className="detail-icon" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                <span>Rua Um da Urbanização do Rio, Loja 76<br/>Ponte, 4805-313 Guimarães, Portugal</span>
              </div>
              <div className="detail-item" style={{ alignItems: 'flex-start' }}>
                <Clock size={20} className="detail-icon" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                <span>
                  <b>Terça-feira:</b> 09:30 – 12:30 | 14:00 – 19:30<br/>
                  <b>Quarta a Sexta:</b> 09:30 – 13:00 | 14:30 – 19:30<br/>
                  <b>Sábado:</b> 09:00 – 13:00 | 14:00 – 18:00<br/>
                  <b>Dom e Seg:</b> Fechado
                </span>
              </div>
            </div>
          </div>
          
          <div className="contact-image-wrapper">
             <div className="contact-image-placeholder">
                <h3 className="contact-image-title">A sua beleza em mãos especializadas</h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
