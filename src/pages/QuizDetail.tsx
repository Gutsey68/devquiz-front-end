import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Quiz } from '@/interfaces/QuizInterface';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuizDetail: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showMoreExplanation, setShowMoreExplanation] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/quiz/${quizId}`
        );
        setQuiz(response.data.data);
      } catch (error) {
        setError('Error fetching quiz details');
        console.error(error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleOptionChange = (optionId: number) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowMoreExplanation(false);
  };

  const handleStartQuiz = () => {
    setShowIntro(false);
  };

  const handleShowMoreExplanation = () => {
    setShowMoreExplanation(true);
  };

  if (error) {
    return <div className="text-center text-red-500">⚠️ {error}</div>;
  }

  if (!quiz) {
    return <div>Loading...</div>;
  }

  if (showIntro) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-semibold">{quiz.name}</h2>
        <img
          src={`/src/assets/icons/${quiz.icon_name}`}
          alt={`${quiz.name} icon`}
          width={100}
          className="m-auto my-4"
        />
        <p className="text-lg mb-6">{quiz.description}</p>
        <button
          onClick={handleStartQuiz}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Commencer le quiz
        </button>
      </div>
    );
  }

  if (currentQuestionIndex >= quiz.questions.length) {
    return (
      <div>
        <h2>Bravo ! Tu as terminé le quiz.</h2>
        <p>Tu as répondu à toutes les questions.</p>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div>
      <div>
        <Card className="mx-auto max-w-xl p-4">
          <h3 className="font-semibold text-lg">
            {currentQuestion.question_text}
          </h3>
          <div className="options">
            {currentQuestion.options.map(option => (
              <Card key={option.id} className="block my-4 p-4">
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="option"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => handleOptionChange(option.id)}
                    disabled={showExplanation}
                  />
                  {option.text}
                </label>
              </Card>
            ))}
          </div>
          <div className="flex justify-between">
            <Button
              onClick={handleSubmit}
              disabled={showExplanation || selectedOption === null}
            >
              Envoyer
            </Button>
            {showExplanation && (
              <>
                <Button onClick={handleShowMoreExplanation}>
                  Voir plus d'explications
                </Button>
                <Button onClick={handleNextQuestion}>Question Suivante</Button>
              </>
            )}
          </div>
          {showExplanation && (
            <div>
              <p
                className={
                  currentQuestion.options.find(
                    option => option.id === selectedOption
                  )?.is_correct
                    ? 'text-green-400'
                    : 'text-red-500'
                }
              >
                {currentQuestion.options.find(
                  option => option.id === selectedOption
                )?.is_correct
                  ? 'Bravo ! tu as eu la bonne réponse.'
                  : `Désolé... mais la bonne réponse était "${
                      currentQuestion.options.find(option => option.is_correct)
                        ?.text
                    }". ${
                      currentQuestion.options.find(option => option.is_correct)
                        ?.explanation
                    }`}
              </p>

              {showMoreExplanation && (
                <p className="text-gray-600 mt-4">
                  {
                    currentQuestion.options.find(option => option.is_correct)
                      ?.explanation
                  }
                </p>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default QuizDetail;
