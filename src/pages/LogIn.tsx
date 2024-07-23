import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { Label } from '@radix-ui/react-label';
import axios from 'axios';
import { LogInIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LogIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/login',
        formData
      );
      login(response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <Card className="w-full max-w-sm m-auto">
      <form onSubmit={handleLogin}>
        <CardHeader>
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>
            Entrez votre email ci-dessous pour vous connecter.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="phplover@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" className="w-full">
            <LogInIcon width={16} className="mr-1" />
            Se connecter
          </Button>
          <div className="mt-4 text-center text-sm">
            Vous n'avez pas de compte ?
            <Link to="/inscription" className="underline ml-1">
              Inscrivez-vous.
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};
