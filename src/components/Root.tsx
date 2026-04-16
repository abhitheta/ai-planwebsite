import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ScrollToTopButton } from './ScrollToTopButton';

export function Root() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
