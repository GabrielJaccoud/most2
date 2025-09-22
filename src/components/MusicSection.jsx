import React, { useState, useRef } from 'react';

const MusicSection = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  const songs = [
    { id: 1, title: 'Canção da Amizade', artist: 'Gabriel Jaccoud', src: '/assets/music/cancao_da_amizade.mp3', duration: '2:45' },
    { id: 2, title: 'Rock do Repolho', artist: 'Gabriel Jaccoud', src: '/assets/music/rock_do_repolho.mp3', duration: '4:02' },
    { id: 3, title: 'Valsa da Maionese', artist: 'Gabriel Jaccoud', src: '/assets/music/valsa_da_maionese.mp3', duration: '3:30' },
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
    <section id="musicas" className="section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎵 Músicas Encantadas</h2>
          <p className="section-subtitle">A trilha sonora original que toca o coração</p>
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


