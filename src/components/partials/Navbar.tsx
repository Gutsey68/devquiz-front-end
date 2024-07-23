import { useAuth } from '@/context/AuthContext';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center mx-24 p-4">
      <NavLink className="" to="/">
        Logo
      </NavLink>
      <div className="flex gap-4 items-center">
        <NavLink to="/quiz">Quiz</NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <Button onClick={logout}>Déconnexion</Button>
          </>
        ) : (
          <>
            <NavLink className="ml-16" to="/connexion">
              <Button>Connexion</Button>
            </NavLink>
            <NavLink to="/inscription">
              <Button variant={'outline'}>S'inscrire</Button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
