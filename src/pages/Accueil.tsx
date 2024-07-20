import IconCloud from '@/components/magicui/icon-cloud';
import SparklesText from '@/components/magicui/sparkles-text';
import { ThreeLastQuiz } from '@/components/modules/ThreeLastQuiz';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma'
];

export const Accueil = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mx-24 my-40 text-pretty">
        <div className="py-4">
          <h1 className="">
            <SparklesText text=" Apprenez le Développement Web" />
          </h1>{' '}
          <p className="text-3xl mt-2 font-semibold">
            avec des cours et des leçons interactives
          </p>
          <p className="mt-8 text-pretty text-lg">
            Acquérez les connaissances nécessaires pour faire avancer votre
            carrière
          </p>
          <p className="mb-8 text-lg">en seulement 5 minutes par jour.</p>
          <Link to="/inscription">
            <Button>Commencez gratuitement</Button>
          </Link>
        </div>
        <div className="">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <ThreeLastQuiz />
    </>
  );
};
