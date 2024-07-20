import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-24 p-4">
      <NavLink className="" to="/">
        Logo
      </NavLink>
      <div className="flex gap-4 items-center">
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink className="ml-16" to="/connexion">
          <Button>Connexion</Button>
        </NavLink>
        <NavLink to="/inscription">
          <Button variant={'outline'}>S'inscrire</Button>
        </NavLink>
      </div>
    </nav>
  );
};
