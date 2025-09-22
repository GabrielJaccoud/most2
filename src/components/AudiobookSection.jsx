import React from 'react';

const AudiobookSection = () => {
  return (
    <section id="audiobook" className="section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎧 Audiobook Completo</h2>
          <p className="section-subtitle">Ouça a aventura completa narrada com carinho</p>
        </div>
        {/* Conteúdo do player de audiobook aqui */}
        <div className="audiobook-player-content">
          {/* Placeholder para o player de audiobook */}
          <p>Player de audiobook em breve...</p>
        </div>
      </div>
    </section>
  );
};

export default AudiobookSection;


