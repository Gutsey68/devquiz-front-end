import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface QuizCardProps {
  quizId: number;
  quizName: string;
  quizDescription: string;
  quizImage: string;
}

const QuizCard: React.FC<QuizCardProps> = ({
  quizId,
  quizName,
  quizDescription,
  quizImage
}) => {
  return (
    <Card className="m-1 w-96 h-52 hover:bg-accent">
      <Link to={`/quiz/${quizId}`}>
        <CardHeader>
          <img src={quizImage} width={40} alt={`${quizName} icon`} />
        </CardHeader>
        <CardContent>
          <CardTitle>{quizName}</CardTitle>
        </CardContent>
        <CardFooter>
          <p>{quizDescription}</p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default QuizCard;
