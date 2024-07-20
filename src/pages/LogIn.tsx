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
import { Label } from '@radix-ui/react-label';
import { LogInIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LogIn = () => {
  function handleLogin() {}

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
              type="email"
              placeholder="phplover@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" required />
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