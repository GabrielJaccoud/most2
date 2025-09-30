import React from 'react';

const FinalCTASection = () => {
  return (
    <section className="section final-cta-section">
      <div className="container">
        <div className="final-cta-content fade-in-up">
          <h2 className="cta-title">Vamos espalhar esse amor?</h2>
          <p className="cta-subtitle">Compre, leia, ouça e compartilhe o Mostardinha com quem você ama</p>
          
          <div className="cta-buttons">
            <a 
              href="https://pay.hotmart.com/H100940670E" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large" 
              aria-label="Comprar o livro Mostardinha por R$ 34,99"
            >
              <span className="btn-icon" aria-hidden="true">🛒</span>
              Comprar o livro - R$ 34,99
            </a>
            <a 
              href="https://www.youtube.com/watch?v=BSzPFZICl5c&t=663s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large" 
              aria-label="Ouvir o audiobook gratuito do Mostardinha no YouTube"
            >
              <span className="btn-icon" aria-hidden="true">🎧</span>
              Ouvir o audiobook
            </a>
          </div>
          
          <div className="cta-image">
            <img 
              src="/assets/images/mostardinha.png" 
              alt="Mostardinha" 
              className="cta-mostardinha"
              loading="lazy"
              onError={(e) => {
                e.target.src = '/assets/images/Mostardinha(2).png';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
