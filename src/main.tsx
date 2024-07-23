import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';
import './globals.css';
import { Accueil } from './pages/Accueil';
import { LogIn } from './pages/LogIn';
import { PageError } from './pages/PageError';
import QuizDetail from './pages/QuizDetail';
import { QuizList } from './pages/QuizList';
import { SignUp } from './pages/SignUp';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/connexion" />;
};

const AuthenticatedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? children : <Navigate to="/" />;
};

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
        element: (
          <PrivateRoute>
            <QuizList />
          </PrivateRoute>
        )
      },
      {
        path: 'quiz/:quizId',
        element: (
          <PrivateRoute>
            <QuizDetail />
          </PrivateRoute>
        )
      },
      {
        path: '/connexion',
        element: (
          <AuthenticatedRoute>
            <LogIn />
          </AuthenticatedRoute>
        )
      },
      {
        path: '/inscription',
        element: (
          <AuthenticatedRoute>
            <SignUp />
          </AuthenticatedRoute>
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
