import { useState, useEffect, useRef } from 'react'
import './App.css'

// Import assets
import mostardinhaCapa from './assets/images/CAPA.png'
import mostardinha from './assets/images/mostardinha.png'
import maionese from './assets/images/maionese.png'
import salsinha from './assets/images/salsinha.png'
import repolho from './assets/images/repolho.png'
import catchup from './assets/images/catchup.png'
import tovar from './assets/images/tovar.png'
import donaFormiga from './assets/images/dona_formiga.png'
import cigarra from './assets/images/cigarra.png'
import cuco from './assets/images/cuco.png'
import alho from './assets/images/alho.png'
import trilhaSonora from './assets/temamostardinha.wav'

// Import components
import MusicSection from './components/MusicSection'
import AudiobookSection from './components/AudiobookSection'
import QuizSection from './components/QuizSection'
import ReadingImportanceSection from './components/ReadingImportanceSection'
import VoicesSection from './components/VoicesSection'
import BehindScenesSection from './components/BehindScenesSection'
import WisdomSection from './components/WisdomSection'
import PublisherSection from './components/PublisherSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const audioRef = useRef(null)
  const [isReadingTipsModalOpen, setIsReadingTipsModalOpen] = useState(false);

  // Audio controls
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsAudioPlaying(!isAudioPlaying)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right')
    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const characters = [
    {
      name: 'Mostardinha',
      image: mostardinha,
      quote: '"Se você quiser ter mais sorrisos na vida, sorria mais."'
    },
    {
      name: 'Maionese',
      image: maionese,
      quote: '"Estou apaixonada... será que eu também posso aprender com o velho Alho?"'
    },
    {
      name: 'Salsinha',
      image: salsinha,
      quote: '"Nossa Senhora do Grande Inhame! Que aventura!"'
    },
    {
      name: 'Repolho',
      image: repolho,
      quote: '"PUUUM!" (Sim, ele solta muitos...)'
    },
    {
      name: 'Catchup',
      image: catchup,
      quote: '"Sou medroso, mas mapas me dão coragem!"'
    },
    {
      name: 'Tovar (elefante)',
      image: tovar,
      quote: '"O caminho é o que fazemos dele."'
    },
    {
      name: 'Dona Formiga',
      image: donaFormiga,
      quote: '"Cantar me faz trabalhar melhor. E perdoar é o segredo."'
    },
    {
      name: 'Dona Cigarra',
      image: cigarra,
      quote: '"A gente pode voltar a cantar... e a ser feliz."'
    },
    {
      name: 'Cuco',
      image: cuco,
      quote: '"CUUUCOOOO! O tempo de mudar é agora!"'
    },
    {
      name: 'Velho Alho',
      image: alho,
      quote: '"Faça o bem, que o bem volta."'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed-nav">
        <div className="container">
          <div className="nav-content">
            <a href="#inicio" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>
              <img src={mostardinha} alt="Mostardinha" className="nav-logo-img" />
              <span className="nav-logo-text">Mostardinha</span>
            </a>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#inicio" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>Início</a></li>
              <li><a href="#historia" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('historia') }}>História</a></li>
              <li><a href="#personagens" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('personagens') }}>Personagens</a></li>
              <li><a href="#musicas" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('musicas') }}>Músicas</a></li>
              <li><a href="#audiobook" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('audiobook') }}>Audiobook</a></li>
              <li><a href="#leitura-familia" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('leitura-familia') }}>Leitura em Família</a></li>
              <li><a href="#quiz" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('quiz') }}>Quiz</a></li>
              <li><a href="#vozes" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('vozes') }}>Vozes</a></li>
              <li><a href="#bastidores" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('bastidores') }}>Bastidores</a></li>
              <li><a href="#editora-humanizar" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('editora-humanizar') }}>Editora</a></li>
              <li><a href="#newsletter" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('newsletter') }}>Newsletter</a></li>
            </ul>

            <div className="nav-cta">
              <a href="https://pay.hotmart.com/H100940670E" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
                Comprar - R$ 34,99
              </a>
            </div>

            <button
              className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Audio Player */}
      <div className="audio-player-fixed">
        <div className="audio-player-content">
          <div className="audio-info">
            <span className="audio-icon-animated">🎵</span>
            <span className="audio-title">Trilha do Mostardinha</span>
          </div>
          <div className="audio-controls">
            <button className="audio-btn-fixed" onClick={toggleAudio}>
              <span>{isAudioPlaying ? '⏸️' : '▶️'}</span>
            </button>
            <div className="volume-control">
              <input
                type="range"
                className="volume-slider"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
        <audio ref={audioRef} loop>
          <source src={trilhaSonora} type="audio/wav" />
          Seu navegador não suporta áudio.
        </audio>
      </div>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-background">
          <div className="parallax-layer parallax-sky"></div>
          <div className="parallax-layer parallax-clouds"></div>
          <div className="parallax-layer parallax-mountains"></div>
        </div>

        <div className="floating-elements">
          <div className="star star-1">⭐</div>
          <div className="star star-2">⭐</div>
          <div className="star star-3">⭐</div>
          <div className="balloon balloon-1">🎈</div>
          <div className="balloon balloon-2">🎈</div>
          <div className="note note-1">🎵</div>
          <div className="note note-2">🎶</div>
          <div className="note note-3">🎵</div>
        </div>

        <div className="container">
          <div className="hero-content fade-in-up">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="highlight">Mostardinha</span> é um grão de mostarda
              </h1>
              <p className="hero-subtitle">
                Pequeno no tamanho, mas <strong>gigante em amor, coragem e sabedoria</strong>.
                Ele vive em Temperópolis, uma ilha encantada onde os sentimentos criam forma,
                os alimentos falam e a vida ensina com leveza.
              </p>
              <p className="hero-description">
                Conheça o livro digital que está <strong>emocionando crianças, pais, professores e terapeutas</strong>.
              </p>

              <div className="book-title-hero">
                <h2>📘 Mostardinha e sua Turma em: Temperópolis</h2>
                <p>Uma aventura afetiva com trilha sonora original, personagens cativantes e lições que tocam o coração.</p>
              </div>

              <div className="hero-cta">
                <a href="https://pay.hotmart.com/H100940670E" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                  <span>🛒</span>
                  Quero o Livro por R$ 34,99
                </a>

                <div className="voucher-section">
                  <label htmlFor="voucherInput">Você tem um vale-presente ou cupom? Insira aqui!</label>
                  <div className="voucher-controls">
                    <input
                      type="text"
                      id="voucherInput"
                      placeholder="Digite seu cupom..."
                      className="voucher-input"
                    />
                    <button className="btn btn-outline btn-small">
                      Aplicar Cupom
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-image fade-in-right">
              <img src={mostardinhaCapa} alt="Capa do livro Mostardinha" className="mostardinha-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="historia" className="section story-section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">📖 A Jornada de Cadu</h2>
            <p className="section-subtitle">Uma aventura que começa com uma tempestade e floresce em amizades</p>
          </div>

          <div className="story-content">
            <div className="story-sequence fade-in-left">
              <div className="sequence-item">
                <div className="sequence-icon">🌊</div>
                <h3>O Naufrágio</h3>
                <p>Cadu é um menino que caiu no mar durante uma tempestade...</p>
              </div>
              <div className="sequence-arrow">➡️</div>
              <div className="sequence-item">
                <div className="sequence-icon">🏝️</div>
                <h3>Temperópolis</h3>
                <p>...e acordou em uma ilha mágica cheia de surpresas!</p>
              </div>
              <div className="sequence-arrow">➡️</div>
              <div className="sequence-item">
                <div className="sequence-icon">👫</div>
                <h3>Novos Amigos</h3>
                <p>Conhece Mostardinha, Maionese, Salsinha e outros personagens encantadores.</p>
              </div>
            </div>

            <div className="story-description fade-in-right">
              <p>
                Em Temperópolis, Cadu embarca em uma jornada de <strong>amizade, autoconhecimento,
                respeito e esperança</strong> — com música, humor e muito amor.
              </p>
              <p>
                Uma história que ensina que crescer é um movimento do coração,
                onde cada personagem traz uma lição especial sobre a vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="personagens" className="section characters-section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">🎭 A Turma de Temperópolis</h2>
            <p className="section-subtitle">Conheça os personagens que vão encantar seu coração</p>
          </div>

          <div className="characters-grid">
            {characters.map((character, index) => (
              <div key={index} className="character-card fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="character-image">
                  <img src={character.image} alt={character.name} loading="lazy" />
                </div>
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <p className="character-quote">{character.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Importance Section */}
      <ReadingImportanceSection setIsReadingTipsModalOpen={setIsReadingTipsModalOpen} />

      {/* Music Section */}
      <MusicSection />

      {/* Audiobook Section */}
      <AudiobookSection />

      {/* Quiz Section */}
      <QuizSection />

      {/* Voices Section */}
      <VoicesSection />

      {/* Behind Scenes Section */}
      <BehindScenesSection />

      {/* Wisdom Section */}
      <WisdomSection />

      {/* Publisher Section */}
      <PublisherSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Newsletter Section */}
      <section id="newsletter" className="section newsletter-section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">💌 Newsletter</h2>
            <p className="section-subtitle">Receba novidades do mundo de Temperópolis</p>
          </div>
          <div className="newsletter-form">
            <form>
              <input
                type="text"
                placeholder="Seu nome"
                required
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                required
              />
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                <span>✨</span>
                Quero receber!
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal para Dicas de Leitura */}
      <div id="readingTipsModal" className={`modal ${isReadingTipsModalOpen ? 'active' : ''}`} aria-hidden={!isReadingTipsModalOpen} role="dialog" aria-labelledby="modalTitle">
        <div className="modal-content">
          <div className="modal-header">
            <h3 id="modalTitle">Dicas para um Momento Mágico</h3>
            <button id="closeTipsModal" className="modal-close-btn" aria-label="Fechar" onClick={() => setIsReadingTipsModalOpen(false)}>&times;</button>
          </div>
          <div className="modal-body">
            <ul className="tips-list">
              <li>🗣️ <strong>Leitura com vozes diferentes:</strong> Dê uma voz única para cada personagem. Isso torna a história viva e divertida!</li>
              <li>🎧 <strong>Ouça o audiobook juntos:</strong> Aproveite a narração oficial e a trilha sonora para uma imersão completa.</li>
              <li>🎭 <strong>Reencenem a história:</strong> Peça para seu filho representar seu personagem favorito. É uma forma lúdica de rever o conteúdo.</li>
              <li>🎨 <strong>Crie arte com a imaginação:</strong> Desenhe cenas da ilha, crie cartazes dos personagens ou invente novas aventuras para eles.</li>
              <li>💬 <strong>Converse sobre os sentimentos:</strong> Pergunte como o seu filho se sentiu com as escolhas dos personagens. A empatia nasce do diálogo.</li>
            </ul>
          </div>
          <div className="modal-footer">
            <p><em>O Mostardinha é mais que um livro. É um convite para o afeto.</em></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
