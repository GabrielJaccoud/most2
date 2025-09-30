import React from 'react';

const VoicesSection = () => {
  const voices = [
    {
      name: 'Gabriel Jaccoud',
      image: '/assets/images/gabriel-jaccoud.png',
      characters: 'Narrador, Grande Inhame, Velho Alho, Cuco',
      quote: '"Narrar e dirigir esse projeto me lembrou do meu propósito: tocar corações."',
      instagram: 'https://www.instagram.com/gabriel_jaccoud',
      delay: 0
    },
    {
      name: 'Jaqueline',
      image: '/assets/images/jaqueline.jpg',
      characters: 'Dona Cigarra',
      quote: '"Cantar enquanto dublava foi um desafio bom de se viver."',
      instagram: 'https://www.instagram.com/jaqueline',
      delay: 200
    },
    {
      name: 'Carolina Lopes',
      image: '/assets/images/carol.jpg',
      characters: 'Mostardinha, Maionese',
      quote: '',
      instagram: 'https://www.instagram.com/lopescarolnina',
      delay: 400
    },
    {
      name: 'Klaudia Lopes',
      image: '/assets/images/klaudia-lopes.jpg',
      characters: 'Cadu',
      quote: '',
      instagram: 'https://www.instagram.com/klaudya.lopes',
      delay: 600
    },
    {
      name: 'Gabriel Morais',
      image: '/assets/images/gabriel-morais.jpg',
      characters: 'Theo',
      quote: '',
      instagram: 'https://www.instagram.com/gabriel.morais1801',
      delay: 800
    },
    {
      name: 'Daniele Souza',
      image: '/assets/images/dani-souza.jpg',
      characters: 'Débora',
      quote: '',
      instagram: 'https://www.instagram.com/vozdanielesouza',
      delay: 1000
    },
    {
      name: 'André Carneiro',
      image: '/assets/images/andre-carneiro.jpg',
      characters: 'Catchup',
      quote: '',
      instagram: 'https://www.instagram.com/prof_andre_carneiro',
      delay: 1200
    },
    {
      name: 'Victor Moreno',
      image: '/assets/images/victor-moreno.jpg',
      characters: 'Repolho',
      quote: '',
      instagram: 'https://www.instagram.com/housnel',
      delay: 1400
    },
    {
      name: 'Piter de Paula',
      image: '/assets/images/piter-de-paula.jpg',
      characters: 'Salsinha',
      quote: '',
      instagram: 'https://www.instagram.com/piterdepaulamusico',
      delay: 1600
    },
    {
      name: 'Graziela Ferreira',
      image: '/assets/images/grazi.jpg',
      characters: 'Senhora Mostarda',
      quote: '',
      instagram: 'https://www.instagram.com/zifsilva_',
      delay: 1800
    },
    {
      name: 'Helder Canto',
      image: '/assets/images/helder-canto.jpg',
      characters: 'Tovar',
      quote: '',
      instagram: 'https://www.instagram.com/heldercanto',
      delay: 2000
    },
    {
      name: 'Nathália Jaccoud',
      image: '/assets/images/nathalia-jaccoud.jpg',
      characters: 'Macaquinho',
      quote: '',
      instagram: 'https://www.instagram.com/jaccoudnathalia',
      delay: 2200
    },
    {
      name: 'André Nóbrega',
      image: '/assets/images/andre-nobrega.jpg',
      characters: 'Macaco',
      quote: '',
      instagram: 'https://www.instagram.com/talesoftoficial',
      delay: 2400
    },
    {
      name: 'Antônio Jaccoud',
      image: '/assets/images/antonio-jaccoud.jpg',
      characters: 'Comandante',
      quote: '',
      instagram: '',
      delay: 2600
    }
  ];

  return (
    <section id="vozes" className="section voices-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎤 Vozes que Encantam</h2>
          <p className="section-subtitle">Conheça os artistas que deram voz, emoção e alma aos personagens de Temperópolis.</p>
        </div>

        <div className="voices-grid">
          {voices.map((voice, index) => (
            <div 
              key={index} 
              className="voice-card fade-in-up" 
              style={{ animationDelay: `${voice.delay}ms` }}
            >
              <img 
                src={voice.image} 
                alt={`${voice.name} - ${voice.characters}`} 
                className="voice-photo" 
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/assets/images/placeholder-avatar.png';
                }}
              />
              <div className="voice-info">
                <h3>{voice.name}</h3>
                <p><strong>Personagem{voice.characters.includes(',') ? 's' : ''}:</strong> {voice.characters}</p>
                {voice.quote && (
                  <p className="voice-quote">{voice.quote}</p>
                )}
                {voice.instagram && (
                  <a 
                    href={voice.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="voice-social" 
                    aria-label={`Visitar o Instagram de ${voice.name}`}
                  >
                    📸 Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;
