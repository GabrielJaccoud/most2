import React from 'react';

const ReadingImportanceSection = ({ setIsReadingTipsModalOpen }) => {
  return (
    <section id="leitura-familia" className="section reading-importance-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">📖 Mais do que uma história. Um momento entre vocês.</h2>
          <p className="section-subtitle">Transforme a leitura em um vínculo afetivo inesquecível</p>
        </div>

        <div className="reading-content">
          <div className="reading-text fade-in-left">
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

            <div className="reading-benefits">
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

            <div className="reading-cta">
              <button onClick={() => setIsReadingTipsModalOpen(true)} className="btn btn-secondary btn-large">
                💡 Como transformar essa leitura em um momento mágico?
              </button>
              <a href="https://www.youtube.com/watch?v=BSzPFZICl5c&t=663s" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                🎬 Leia junto com o Mostardinha
              </a>
            </div>
          </div>

          <div className="reading-image fade-in-right">
            <div className="image-card">
              <div className="image-icon">👨‍👩‍👧‍👦</div>
              <p>
                Em Mostardinha, acreditamos no poder transformador das histórias.
                Incentive a leitura em sua casa e descubra um mundo de
                possibilidades ao lado de seus filhos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingImportanceSection;
