import React from 'react';

const BehindScenesSection = () => {
  return (
    <section id="bastidores" className="section behind-scenes-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎬 Bastidores</h2>
          <p className="section-subtitle">Veja um pedacinho dos bastidores da dublagem!</p>
          <p>Assista à Jaque dublando a Dona Cigarra com direção de Gabriel Jaccoud.</p>
        </div>
        
        <div className="behind-scenes-content fade-in-up">
          <div className="behind-scenes-text">                                    
            <a 
              href="https://www.instagram.com/reel/CtkRU_DAi_o/?igsh=MW1tejR1ejdqaThldw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large" 
              aria-label="Ver bastidores da gravação no Instagram"
            >
              <span className="btn-icon" aria-hidden="true">🎥</span> 
              Ver bastidores da gravação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindScenesSection;
