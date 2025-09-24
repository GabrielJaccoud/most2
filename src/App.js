// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HistorySection from './components/HistorySection';
import CharactersSection from './components/CharactersSection';
import MusicSection from './components/MusicSection';
import AudiobookSection from './components/AudiobookSection';
import QuizSection from './components/QuizSection';
import ReadingTogetherSection from './components/ReadingTogetherSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HistorySection />
      <CharactersSection />
      <MusicSection />
      <AudiobookSection />
      <QuizSection />
      <ReadingTogetherSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
