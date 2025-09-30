import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <img 
                src="/assets/images/mostardinha.png" 
                alt="Mostardinha" 
                className="footer-logo-img"
                onError={(e) => {
                  e.target.src = '/assets/images/Mostardinha(2).png';
                }}
              />
              <span className="footer-logo-text">Mostardinha</span>
            </div>
            <p className="footer-description">
              Uma aventura afetiva que ensina sobre amor, amizade e crescimento. 
              Transformando corações através da literatura infantil.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Links Úteis</h4>
            <ul>
              <li>
                <a 
                  href="#inicio" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#historia" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('historia'); }}
                >
                  História
                </a>
              </li>
              <li>
                <a 
                  href="#personagens" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('personagens'); }}
                >
                  Personagens
                </a>
              </li>
              <li>
                <a 
                  href="#audiobook" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('audiobook'); }}
                >
                  Audiobook
                </a>
              </li>
              <li>
                <a 
                  href="https://pay.hotmart.com/H100940670E" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Comprar
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <ul>
              <li>
                <a 
                  href="https://www.youtube.com/@mundoninoss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visitar o canal Mundo Ninus no YouTube"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@mostardinha.com" 
                  aria-label="Enviar e-mail para contato@mostardinha.com"
                >
                  E-mail
                </a>
              </li>
              <li>
                <a 
                  href="#newsletter" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('newsletter'); }}
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Gabriel Jaccoud - Editora Humanizar. Todos os direitos reservados.</p>
          <p className="footer-note">Feito com 💛 para espalhar amor e transformação.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
