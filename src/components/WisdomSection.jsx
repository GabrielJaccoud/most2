import React from 'react';

const WisdomSection = () => {
  return (
    <section className="section wisdom-section">
      <div className="container">
        <div className="wisdom-content fade-in-up">
          <div className="wisdom-image">
            <img 
              src="/assets/images/senhora_mostarda.png" 
              alt="Senhora Mostarda" 
              className="senhora-mostarda" 
              loading="lazy"
              onError={(e) => {
                e.target.src = '/assets/images/SenhoraMostarda(2).png';
              }}
            />
          </div>
          <div className="wisdom-text">
            <blockquote>
              "A ilha muda de acordo com a nossa necessidade.<br/>
              Ela só mostra os caminhos que estamos prontos a percorrer."
            </blockquote>
            <cite>— Senhora Mostarda</cite>
            <a 
              href="https://www.youtube.com/watch?v=6u8edwJU_Rw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary" 
              aria-label="Ouvir a música Agradecendo no canal Mundo Ninus"
            >
              <span className="btn-icon" aria-hidden="true">🎵</span> 
              Ouça "Agradecendo"
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomSection;
