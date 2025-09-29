import React, { useState } from 'react';

const ReadingImportanceSection = () => {
  const [showTips, setShowTips] = useState(false);

  const tips = [
    "Crie um ritual semanal de leitura juntos, em um horário fixo.",
    "Faça pausas durante a leitura para conversar sobre o que está acontecendo na história.",
    "Incentive a criança a fazer perguntas e expressar suas opiniões sobre os personagens.",
    "Use diferentes vozes para cada personagem, tornando a leitura mais divertida.",
    "Conecte a história com experiências reais da vida da criança.",
    "Deixe a criança escolher o local da leitura - pode ser na cama, no sofá ou até mesmo ao ar livre.",
    "Crie um ambiente acolhedor com almofadas, cobertores e uma iluminação suave."
  ];

  return (
    <section id="leitura-familia" className="section reading-importance-section">
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
            <p>
              A leitura em família é um dos pilares mais importantes para o desenvolvimento infantil e para o fortalecimento dos laços familiares. 
              Ao compartilhar histórias, os pais não apenas estimulam a imaginação e a criatividade das crianças, mas também promovem o 
              desenvolvimento da linguagem, do vocabulário e do pensamento crítico.
            </p>

            <div className="benefits-list">
              <h3>✨ Benefícios da Leitura em Família:</h3>
              <ul>
                <li>🧠 Estimula a imaginação e a criatividade</li>
                <li>📚 Desenvolve a linguagem e o vocabulário</li>
                <li>❤️ Fortalece os laços familiares</li>
                <li>🌟 Cria memórias afetivas duradouras</li>
                <li>🤝 Promove o aprendizado e a empatia</li>
                <li>😴 Estabelece rotinas relaxantes antes de dormir</li>
                <li>🎭 Desenvolve habilidades de interpretação e expressão</li>
              </ul>
            </div>

            <div className="buttons-group">
              <button
                onClick={() => setShowTips(true)}
                className="btn btn-secondary btn-large"
              >
                💡 Como transformar essa leitura em um momento mágico?
              </button>
              <a
                href="https://www.youtube.com/watch?v=BSzPFZICl5c&t=663s"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                🎬 Leia junto com o Mostardinha
              </a>
            </div>
          </div>

          <div className="visual-content">
            <div className="reading-scene-illustration">
              <div className="floating-elements">
                <div className="floating-star star-1">⭐</div>
                <div className="floating-star star-2">✨</div>
                <div className="floating-star star-3">🌟</div>
                <div className="floating-book book-1">📚</div>
                <div className="floating-book book-2">📖</div>
                <div className="floating-heart heart-1">💝</div>
                <div className="floating-heart heart-2">💕</div>
              </div>
              <div className="illustration-content">
                <div className="family-reading-icon">👨‍👩‍👧‍👦</div>
                <p className="illustration-text">
                  <strong>Em Mostardinha, acreditamos no poder transformador das histórias.</strong><br/>
                  Incentive a leitura em sua casa e descubra um mundo de possibilidades ao lado de seus filhos!
                </p>
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
                <p className="modal-intro">
                  Transforme cada momento de leitura em uma experiência inesquecível com essas dicas especiais:
                </p>
                <ul>
                  {tips.map((tip, index) => (
                    <li key={index}>
                      <span className="tip-number">{index + 1}</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button onClick={() => setShowTips(false)} className="btn btn-primary">
                  Vamos começar! 📚
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReadingImportanceSection;
