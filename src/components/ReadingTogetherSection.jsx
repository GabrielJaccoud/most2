// src/components/ReadingTogetherSection.jsx
import React, { useState } from 'react';
import './ReadingTogetherSection.css';

const ReadingTogetherSection = () => {
  const [showTips, setShowTips] = useState(false);

  const tips = [
    "Crie um ritual semanal de leitura juntos, em um horário fixo.",
    "Faça pausas durante a leitura para conversar sobre o que está acontecendo na história.",
    "Incentive a criança a fazer perguntas e expressar suas opiniões sobre os personagens.",
    "Use diferentes vozes para cada personagem, tornando a leitura mais divertida.",
    "Conecte a história com experiências reais da vida da criança."
  ];

  return (
    <section id="reading-together" className="section reading-together-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">📖 Mais do que uma história. Um momento entre vocês.</h2>
          <p className="section-subtitle">Transforme a leitura em um vínculo afetivo inesquecível</p>
        </div>

        <div className="content-wrapper fade-in-up">
          <div className="text-content">
            <p>
              Vivemos num mundo onde a tela afasta. Mas o Mostardinha foi criado para aproximar.
              Ao ler com seu filho, você não está apenas passando uma história. Está compartilhando valores, emoções, riso e presença.
            </p>
            <p>
              Uma leitura acompanhada é um presente. Cada capítulo pode ser uma semente de diálogo e encantamento entre vocês.
            </p>

            <div className="buttons-group">
              <button
                onClick={() => setShowTips(true)}
                className="btn btn-secondary btn-large"
              >
                🟣 Como transformar essa leitura em um momento mágico?
              </button>
              <a
                href="https://www.youtube.com/watch?v=BSzPFZICl5c&t=663s"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                🟢 Leia junto com o Mostardinha
              </a>
            </div>
          </div>

          <div className="visual-content">
            {/* Placeholder para ilustração ou vídeo futuro */}
            <div className="reading-scene-placeholder">
              <div className="parallax-element star">⭐</div>
              <div className="parallax-element leaf">🍃</div>
              <div className="placeholder-text">
                <p>Ilustração de pais e filhos lendo juntos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Dicas */}
        {showTips && (
          <div className="modal-overlay" onClick={() => setShowTips(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>✨ Dicas para uma Leitura Mágica</h3>
                <button onClick={() => setShowTips(false)} className="close-button">×</button>
              </div>
              <div className="modal-body">
                <ul>
                  {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button onClick={() => setShowTips(false)} className="btn btn-primary">
                  Entendi!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReadingTogetherSection;
