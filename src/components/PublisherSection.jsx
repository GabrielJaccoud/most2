import React from 'react';

const PublisherSection = () => {
  return (
    <section id="editora-humanizar" className="section publisher-section">
      <div className="container">
        <div className="publisher-content fade-in-up">
          <div className="publisher-logo">
            <img 
              src="/assets/images/2.png" 
              alt="Logo Editora Humanizar" 
              className="publisher-logo-img"
              loading="lazy"
              onError={(e) => {
                e.target.src = '/assets/images/logo_humanizar.png';
              }}
            />
          </div>

          <div className="publisher-info">
            <h2 className="section-title">📚 Sobre a Editora - HUMANIZAR</h2>
            <p className="publisher-description">
              A <strong>Editora Humanizar</strong> tem como missão publicar obras que elevam a consciência humana, 
              despertam o afeto e promovem o desenvolvimento pessoal desde a infância.
            </p>
            <p className="publisher-description">
              Acreditamos que a leitura transforma — e que livros como o Mostardinha são sementes de 
              um futuro mais gentil, sensível e humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublisherSection;
