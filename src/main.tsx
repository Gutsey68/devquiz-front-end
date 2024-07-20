import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import './globals.css';
import { Accueil } from './pages/Accueil';
import { LogIn } from './pages/LogIn';
import { PageError } from './pages/PageError';
import QuizDetail from './pages/QuizDetail';
import { QuizList } from './pages/QuizList';
import { SignUp } from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      {
        path: '',
        element: <Accueil />
      },
      {
        path: '/quiz',
        element: <QuizList />
      },
      {
        path: 'quiz/:quizId',
        element: <QuizDetail />
      },
      {
        path: '/connexion',
        element: <LogIn />
      },
      {
        path: '/inscription',
        element: <SignUp />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
