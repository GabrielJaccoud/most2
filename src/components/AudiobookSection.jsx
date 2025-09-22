import React, { useState, useRef } from 'react';

const AudiobookSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
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
    <section id="audiobook" className="section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎧 Audiobook Completo</h2>
          <p className="section-subtitle">Ouça a aventura completa narrada com carinho</p>
        </div>

        <div className="audiobook-player-main fade-in-up">
          <h3>Mostardinha e sua Turma em: Temperópolis</h3>
          <p>Narrado por Gabriel Jaccoud</p>
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
          <audio ref={audioRef} src="/assets/audio/audiobook_mostardinha.mp3" onEnded={() => setIsPlaying(false)} />
          <p className="audiobook-description">
            Embarque na história de Cadu e Mostardinha com a narração envolvente de Gabriel Jaccoud. Uma experiência imersiva para toda a família!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudiobookSection;


