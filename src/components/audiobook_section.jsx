import React from 'react';

const AudiobookSection = () => {
  return (
    <section id="audiobook" className="section audiobook-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎧 Audiobook Completo</h2>
          <p className="section-subtitle">Ouça a aventura completa narrada com carinho</p>
        </div>
        <div className="audiobook-player-container fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="audiobook-player">
            <div className="audiobook-cover">
              <img src="/assets/images/CAPA.png" alt="Capa do Audiobook Mostardinha" />
            </div>
            <div className="audiobook-controls">
              <h3 className="audiobook-title">Mostardinha e sua Turma em: Temperópolis</h3>
              <p className="audiobook-narrator">Narrado por Gabriel Jaccoud</p>
              <audio controls className="full-width-audio-player">
                <source src="/assets/temamostardinha.wav" type="audio/wav" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
              <p className="audiobook-description">
                Embarque na história de Cadu e Mostardinha com a narração envolvente de Gabriel Jaccoud.
                Uma experiência imersiva para toda a família!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudiobookSection;

