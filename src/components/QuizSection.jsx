// src/components/QuizSection.jsx
import React, { useState } from 'react';
import './QuizSection.css';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "Qual é seu maior medo?",
      options: ["Ficar sozinho(a)", "Não ser aceito(a)", "Falhar", "Mudanças"],
      correctAnswer: 0,
      personagem: "Mostardinha"
    },
    {
      question: "Como você lida com desafios?",
      options: ["Busco ajuda", "Encaro de frente", "Evito", "Penso muito antes de agir"],
      correctAnswer: 1,
      personagem: "Maionese"
    },
    {
      question: "O que te faz mais feliz?",
      options: ["Brincar com amigos", "Aprender coisas novas", "Ter tranquilidade", "Sentir-se útil"],
      correctAnswer: 2,
      personagem: "Salsinha"
    },
    {
      question: "Qual seu conselho favorito?",
      options: ["Seja gentil", "Tenha coragem", "Pense antes de agir", "Desfrute do momento"],
      correctAnswer: 3,
      personagem: "Velho Alho"
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  const getPersonagemImage = (personagem) => {
    // Substitua pelos caminhos reais das imagens dos personagens
    const images = {
      "Mostardinha": "/assets/images/Mostardinha.png",
      "Maionese": "/assets/images/Maionese.png",
      "Salsinha": "/assets/images/Salsinha.png",
      "Velho Alho": "/assets/images/VelhoAlho.png"
    };
    return images[personagem] || "/assets/images/default.png";
  };

  return (
    <section id="quiz" className="section quiz-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎭 Quiz Emocional</h2>
          <p className="section-subtitle">Descubra qual personagem de Temperópolis é você!</p>
        </div>

        {!showResults ? (
          <div className="quiz-container fade-in-up">
            <div className="question-box">
              <h3>{quizQuestions[currentQuestion].question}</h3>
            </div>

            <div className="options-box">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <button
                className="next-button btn btn-primary"
                onClick={handleNextQuestion}
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
              </button>
            )}
          </div>
        ) : (
          <div className="results-container fade-in-up">
            <h3>🎉 Parabéns! Você é o(a) {quizQuestions[quizQuestions.length - 1].personagem}!</h3>
            <img
              src={getPersonagemImage(quizQuestions[quizQuestions.length - 1].personagem)}
              alt={`Personagem ${quizQuestions[quizQuestions.length - 1].personagem}`}
              className="personagem-image"
            />
            <p>Você acertou {score} de {quizQuestions.length} perguntas.</p>
            <button
              className="restart-button btn btn-secondary"
              onClick={resetQuiz}
            >
              Refazer o Quiz
            </button>
          </div>
        )}

        {/* Botão para enviar resultado por e-mail */}
        {showResults && (
          <div className="email-result-box">
            <p>Quer receber seu resultado por e-mail?</p>
            <form>
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                className="email-input"
              />
              <button type="submit" className="send-email-button btn btn-primary">
                Enviar Resultado
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
