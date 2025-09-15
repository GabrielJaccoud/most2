import React from 'react';

const MusicSection = () => {
  const songs = [
    { title: 'Tema de Mostardinha', duration: '3:15', url: '#' },
    { title: 'Canção da Amizade', duration: '2:45', url: '#' },
    { title: 'Rock do Repolho', duration: '4:02', url: '#' },
    { title: 'Valsa da Maionese', duration: '3:30', url: '#' },
  ];

  return (
    <section id="musicas" className="section music-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎶 Músicas Encantadas</h2>
          <p className="section-subtitle">A trilha sonora original que toca o coração</p>
        </div>
        <div className="music-player-container fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="music-player">
            <div className="album-art">
              <img src="/assets/images/CAPA.png" alt="Capa do Álbum Mostardinha" />
            </div>
            <div className="track-info">
              <h3 className="track-title">Tema de Mostardinha</h3>
              <p className="track-artist">Gabriel Jaccoud</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
              <div className="time-info">
                <span>2:10</span>
                <span>3:15</span>
              </div>
            </div>
            <div className="player-controls">
              <button className="control-btn">⏮️</button>
              <button className="control-btn play-pause">▶️</button>
              <button className="control-btn">⏭️</button>
            </div>
          </div>
          <div className="playlist">
            <h4 className="playlist-title">Próximas Músicas:</h4>
            <ul>
              {songs.slice(1).map((song, index) => (
                <li key={index}>
                  <a href={song.url}>{song.title}</a>
                  <span>{song.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;

