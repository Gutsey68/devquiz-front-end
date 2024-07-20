import { Outlet } from 'react-router-dom';
import { Footer } from '../partials/Footer';
import { Navbar } from '../partials/Navbar';

export const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
