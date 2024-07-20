import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { UserRoundPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

function handleSignUp() {}

export const SignUp = () => {
  return (
    <Card className="mx-auto max-w-sm">
      <form onSubmit={handleSignUp}>
        <CardHeader>
          <CardTitle className="text-2xl">Inscription</CardTitle>
          <CardDescription>
            Entrez vos informations pour créer un compte.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Prénom</Label>
                <Input id="first-name" placeholder="Jade" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Nom</Label>
                <Input id="last-name" placeholder="Haurlhabeat" required />
              </div>
            </div>
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
            <Button type="submit" className="w-full">
              <UserRoundPlus width={16} className="mr-1" />
              Créer un compte
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Vous avez déjà un compte ?
            <Link to="/connexion" className="underline ml-1">
              Se connecter
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};
