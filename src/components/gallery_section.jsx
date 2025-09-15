import React from 'react';

const GallerySection = () => {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🖼️ Galeria de Ilustrações</h2>
          <p className="section-subtitle">Confira algumas das cenas mais marcantes e encantadoras da jornada de Mostardinha e sua turma.</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item fade-in-up" style={{ animationDelay: '100ms' }}>
            <img src="/assets/images/13-BANDA.png" alt="A Banda de Nostradia" />
            <div className="caption">A Banda de Nostradia</div>
          </div>
          <div className="gallery-item fade-in-up" style={{ animationDelay: '200ms' }}>
            <img src="/assets/images/28-ILHA.png" alt="A Ilha da Empatia" />
            <div className="caption">A Ilha da Empatia</div>
          </div>
          <div className="gallery-item fade-in-up" style={{ animationDelay: '300ms' }}>
            <img src="/assets/images/48-FESTIVAL.png" alt="O Festival Final" />
            <div className="caption">O Festival Final</div>
          </div>
          <div className="gallery-item fade-in-up" style={{ animationDelay: '400ms' }}>
            <img src="/assets/images/52-VINHETAFINAL.png" alt="Mostardinha e a Pedra" />
            <div className="caption">Mostardinha e a Pedra</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

