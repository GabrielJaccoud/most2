import React, { useState } from 'react';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: 'Qual sua reação ao ver um amigo triste?',
      options: [
        'Ofereço um abraço e pergunto o que aconteceu.',
        'Tento animá-lo com uma piada ou brincadeira.',
        'Fico sem saber o que fazer, mas me preocupo.',
        'Analiso a situação para encontrar uma solução prática.',
      ],
      correctAnswer: 0,
    },
    {
      question: 'O que você faz quando encontra um desafio grande?',
      options: [
        'Peço ajuda aos amigos e trabalho em equipe.',
        'Encaro de frente, com coragem e determinação.',
        'Penso muito antes de agir, buscando a melhor estratégia.',
        'Busco novas formas de resolver, com criatividade.',
      ],
      correctAnswer: 1,
    },
    {
      question: 'Qual sentimento te move mais?',
      options: [
        'Amizade e companheirismo.',
        'Coragem e aventura.',
        'Sabedoria e reflexão.',
        'Esperança e otimismo.',
      ],
      correctAnswer: 0,
    },
    {
      question: 'Se você pudesse ter um superpoder, qual seria?',
      options: [
        'Fazer todos se sentirem amados.',
        'Ter a força para proteger quem eu amo.',
        'Saber todas as respostas.',
        'Inspirar alegria e leveza.',
      ],
      correctAnswer: 3,
    },
  ];

  const handleAnswerClick = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section id="quiz" className="section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🧩 Quiz Emocional</h2>
          <p className="section-subtitle">Descubra qual personagem de Temperópolis você é!</p>
        </div>

        <div className="quiz-content fade-in-up">
          {!showResults ? (
            <div className="quiz-card">
              <h3>{quizQuestions[currentQuestion].question}</h3>
              <div className="quiz-options">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`quiz-option-btn ${selectedAnswer === index ? 'selected' : ''}`}
                    onClick={() => handleAnswerClick(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                className="btn btn-primary"
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
              </button>
              <p className="question-counter">Questão {currentQuestion + 1} de {quizQuestions.length}</p>
            </div>
          ) : (
            <div className="quiz-results">
              <h3>Seu Resultado:</h3>
              <p>Você acertou {score} de {quizQuestions.length} perguntas.</p>
              {/* Lógica para determinar o personagem com base na pontuação */}
              <p>Você é como o Mostardinha: Pequeno no tamanho, mas gigante em amor, coragem e sabedoria!</p>
              <button className="btn btn-primary" onClick={restartQuiz}>Refazer Quiz</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;


