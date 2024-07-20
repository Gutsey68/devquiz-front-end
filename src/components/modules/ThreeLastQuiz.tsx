import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { MarqueeDemo } from './MarqueeDemo';

export const ThreeLastQuiz = () => {
  return (
    <div className="">
      <div className="mx-24 mt-20 mb-8 flex py-4 justify-between">
        <div className="w-2/3">
          <h2 className="text-3xl font-bold mb-8">
            Quiz pour tous les aspects du développement web
          </h2>
          <p className="text-lg">
            Des bases du HTML aux compétences avancées en développement
            front-end,
          </p>
          <p className="text-lg">
            notre bibliothèque de cours complète a quelque chose pour tout le
            monde.
          </p>
        </div>
        <div className="w-1/3 text-end pt-20">
          <Link to="/quiz">
            <Button>Voir tous les quiz</Button>
          </Link>
        </div>
      </div>
      <div className="mb-20 m-auto">
        <MarqueeDemo />
      </div>
    </div>
  );
};
