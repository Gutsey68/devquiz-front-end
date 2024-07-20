import Marquee from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import { getIconPath } from '@/utils/getIconPath';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Quiz {
  id: number;
  name: string;
  description: string;
  icon_name: string;
}

const ReviewCard = ({
  img,
  name,
  description
}: {
  img: string;
  name: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 h-40 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-col gap-2">
        <img className="mb-2" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getQuizzes() {
      try {
        const response = await axios.get('http://localhost:3000/api/quiz');
        if (Array.isArray(response.data.data)) {
          setQuizzes(response.data.data);
        } else {
          console.log(response.data.data);
          setError('Unexpected response format');
        }
      } catch (error) {
        setError('Error fetching quizzes');
        console.error(error);
      }
    }

    getQuizzes();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const firstRow = quizzes.slice(0, quizzes.length / 2);
  const secondRow = quizzes.slice(quizzes.length / 2);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map(quiz => (
          <Link to={`/quiz/${quiz.id}`}>
            <ReviewCard
              key={quiz.id}
              img={getIconPath(quiz.icon_name)}
              name={quiz.name}
              description={quiz.description}
            />
          </Link>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map(quiz => (
          <Link to={`/quiz/${quiz.id}`}>
            <ReviewCard
              key={quiz.id}
              img={getIconPath(quiz.icon_name)}
              name={quiz.name}
              description={quiz.description}
            />
          </Link>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
