import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface QuizDetailProps {}

interface Quiz {
  id: number;
  name: string;
  description: string;
  icon_name: string;
}

const QuizDetail: React.FC<QuizDetailProps> = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  if (error) {
    return <div>{error}</div>;
  }

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{quiz.name}</h2>
      <img
        src={`/src/assets/icons/${quiz.icon_name}`}
        alt={`${quiz.name} icon`}
        width={50}
      />
      <p>{quiz.description}</p>
    </div>
  );
};

export default QuizDetail;
