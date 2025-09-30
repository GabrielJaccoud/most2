import React, { useState, useRef } from 'react';

const MusicSection = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  const songs = [
    { 
      id: 1, 
      title: 'Tesouros', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/Tesouros.mp3', 
      duration: '4:02',
      description: 'Canção de ninar da mãe do Cadu',
      icon: '🎶💤',
      youtube: 'https://www.youtube.com/watch?v=E-uAaX073J0'
    },
    { 
      id: 2, 
      title: 'Salsinha e Repolho', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/Salsinha_e_Repolho.mp3', 
      duration: '2:50',
      description: 'Entrada dos personagens engraçados',
      icon: '🎺👃',
      youtube: 'https://www.youtube.com/watch?v=X7xcPMjw00k'
    },
    { 
      id: 3, 
      title: 'A Cigarra e a Formiga', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/A_Cigarra_e_a_Formiga.mp3', 
      duration: '3:30',
      description: 'Discussão e reconciliação',
      icon: '🐜🎤',
      youtube: 'https://www.youtube.com/watch?v=o0sJ-iMjzqg'
    },
    { 
      id: 4, 
      title: 'O Elefante', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/O_Elefante.mp3', 
      duration: '3:10',
      description: 'Chegada de Tovar e família',
      icon: '🐘🌿',
      youtube: 'https://www.youtube.com/watch?v=DHTz17QC00g'
    },
    { 
      id: 5, 
      title: 'O Trem', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/O_Trem.mp3', 
      duration: '2:15',
      description: 'Sonho de Cadu com sua mãe',
      icon: '🚂💭',
      youtube: 'https://www.youtube.com/watch?v=CZPrME-Ebyg'
    },
    { 
      id: 6, 
      title: 'Agradecendo', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/Agradecendo.mp3', 
      duration: '3:20',
      description: 'Encontro do Mostardinha com a mãe',
      icon: '🤱🌼',
      youtube: 'https://www.youtube.com/watch?v=6u8edwJU_Rw'
    },
    { 
      id: 7, 
      title: 'Brilhe, Brilhe', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/Brilhe_Brilhe.mp3', 
      duration: '2:20',
      description: 'Entrega do mapa mágico',
      icon: '✨🗺️',
      youtube: 'https://www.youtube.com/watch?v=S9veWe3S6-4'
    },
    { 
      id: 8, 
      title: 'O Cuco', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/O_Cuco.mp3', 
      duration: '3:00',
      description: 'Aviso de mudança, passagem de tempo emocional',
      icon: '⏰🕊️',
      youtube: 'https://www.youtube.com/watch?v=xMl24S2rsPI'
    },
    { 
      id: 9, 
      title: 'Mostardinha', 
      artist: 'Gabriel Jaccoud', 
      src: '/assets/music/Mostardinha.mp3', 
      duration: '2:45',
      description: 'Final e festival na ilha',
      icon: '🌱🎉',
      youtube: 'https://www.youtube.com/watch?v=1BNxMnE2Crc'
    }
  ];

  const playSong = (song) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <section id="musicas" className="section music-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎵 Músicas Integradas à História</h2>
          <p className="section-subtitle">Cada canção conta um momento especial da jornada</p>
        </div>

        <div className="music-player-main fade-in-up">
          <div className="current-song-info">
            <h3>{currentSong ? currentSong.title : 'Selecione uma música'}</h3>
            <p>{currentSong ? currentSong.artist : 'Mostardinha'}</p>
          </div>
          <div className="player-controls">
            <button onClick={togglePlayPause}>{isPlaying ? '⏸️' : '▶️'}</button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
          <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
        </div>

        <div className="music-grid">
          {songs.map((song) => (
            <div key={song.id} className="music-card fade-in-up">
              <div className="music-icon">{song.icon}</div>
              <h3>{song.title}</h3>
              <p>{song.description}</p>
              <div className="music-card-buttons">
                <button 
                  onClick={() => playSong(song)}
                  className="btn btn-outline btn-small"
                  aria-label={`Tocar a música ${song.title}`}
                >
                  <span className="btn-icon" aria-hidden="true">🎵</span> 
                  Tocar
                </button>
                <a 
                  href={song.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-small" 
                  aria-label={`Ouvir a música ${song.title} no YouTube`}
                >
                  <span className="btn-icon" aria-hidden="true">🎵</span> 
                  YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="song-list fade-in-up">
          <h4>Próximas Músicas:</h4>
          <ul>
            {songs.map((song) => (
              <li key={song.id} onClick={() => playSong(song)} className={currentSong && currentSong.id === song.id ? 'active' : ''}>
                <span>{song.title}</span>
                <span>{song.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
