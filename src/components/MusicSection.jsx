import React from 'react';

const MusicSection = () => {
  return (
    <section id="musicas" className="section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎵 Músicas Encantadas</h2>
          <p className="section-subtitle">A trilha sonora original que toca o coração</p>
        </div>
        {/* Conteúdo do player de música aqui */}
        <div className="music-player-content">
          {/* Placeholder para o player de música */}
          <p>Player de música em breve...</p>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;


