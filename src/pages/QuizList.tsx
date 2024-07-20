import QuizCard from '@/components/QuizCard';
import { getIconPath } from '@/utils/getIconPath';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Quiz {
  id: number;
  name: string;
  description: string;
  icon_name: string;
}

export const QuizList = () => {
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getQuiz() {
      try {
        const response = await axios.get('http://localhost:3000/api/quiz');
        if (Array.isArray(response.data.data)) {
          setQuiz(response.data.data);
        } else {
          console.log(response.data.data);

          setError('Unexpected response format');
        }
      } catch (error) {
        setError('Error fetching quizzes');
        console.error(error);
      }
    }

    getQuiz();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-24 my-20">
      <ul className="flex flex-wrap">
        {quiz.map(quiz => (
          <li key={quiz.id}>
            <QuizCard
              quizId={quiz.id}
              quizName={quiz.name}
              quizDescription={quiz.description}
              quizImage={getIconPath(quiz.icon_name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
