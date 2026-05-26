import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { MessageCircle } from 'lucide-react'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer style={{backgroundColor: '#1E252B', color: '#94a3b8', padding: '3rem 0', textAlign: 'center', borderTop: '1px solid #2C3E50'}}>
        <p>&copy; {new Date().getFullYear()} Sofia Piairo - Centro de Estética Avançada. Todos os direitos reservados.</p>
        <p style={{fontSize: '0.85rem', marginTop: '0.5rem', color: '#64748b'}}>Guimarães, Portugal</p>
      </footer>
      
      {/* Botão Flutuante do WhatsApp */}
      <a href="https://wa.me/351939346511" target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Fale conosco no WhatsApp">
        <MessageCircle size={32} />
      </a>
    </>
  )
}

export default App
