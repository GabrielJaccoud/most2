import React, { useState } from 'react';

const QuizSection = () => {
  const questions = [
    {
      question: 'Qual sua reação ao ver um amigo triste?',
      options: [
        { text: 'Ofereço um abraço e pergunto o que aconteceu.', character: 'Mostardinha' },
        { text: 'Tento animá-lo com uma piada ou brincadeira.', character: 'Salsinha' },
        { text: 'Fico sem saber o que fazer, mas me preocupo.', character: 'Catchup' },
        { text: 'Analiso a situação para encontrar uma solução prática.', character: 'Maionese' },
      ],
    },
    {
      question: 'Em uma situação nova, você prefere:',
      options: [
        { text: 'Explorar tudo com curiosidade e otimismo.', character: 'Mostardinha' },
        { text: 'Observar de longe antes de se aproximar.', character: 'Catchup' },
        { text: 'Fazer novas amizades rapidamente.', character: 'Salsinha' },
        { text: 'Organizar um plano antes de agir.', character: 'Maionese' },
      ],
    },
    {
      question: 'Qual sua maior qualidade?',
      options: [
        { text: 'Otimismo e capacidade de ver o lado bom.', character: 'Mostardinha' },
        { text: 'Lealdade e proteção aos que ama.', character: 'Repolho' },
        { text: 'Senso de humor e alegria contagiante.', character: 'Salsinha' },
        { text: 'Inteligência e habilidade de resolver problemas.', character: 'Maionese' },
      ],
    },
    {
      question: 'Como você lida com desafios?',
      options: [
        { text: 'Com fé e a certeza de que tudo vai dar certo.', character: 'Mostardinha' },
        { text: 'Com um pouco de medo, mas enfrento.', character: 'Catchup' },
        { text: 'Com bom humor e buscando o lado divertido.', character: 'Salsinha' },
        { text: 'Com planejamento e estratégia.', character: 'Maionese' },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [resultCharacter, setResultCharacter] = useState('');

  const handleAnswer = (character) => {
    setScores((prevScores) => ({
      ...prevScores,
      [character]: (prevScores[character] || 0) + 1,
    }));

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      calculateResult();
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    let maxScore = 0;
    let character = '';
    for (const char in scores) {
      if (scores[char] > maxScore) {
        maxScore = scores[char];
        character = char;
      }
    }
    setResultCharacter(character);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({});
    setShowResult(false);
    setResultCharacter('');
  };

  return (
    <section id="quiz" className="section quiz-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🧩 Quiz Emocional</h2>
          <p className="section-subtitle">Descubra qual personagem de Temperópolis você é!</p>
        </div>

        {!showResult ? (
          <div className="quiz-card fade-in-up">
            <h3>{questions[currentQuestion].question}</h3>
            <div className="options-grid">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="option-btn"
                  onClick={() => handleAnswer(option.character)}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div className="quiz-progress">
              Questão {currentQuestion + 1} de {questions.length}
            </div>
          </div>
        ) : (
          <div className="quiz-result fade-in-up">
            <h3>Parabéns! Você é...</h3>
            <p className="result-character">{resultCharacter}</p>
            <button className="btn btn-primary" onClick={resetQuiz}>Fazer Novamente</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;

