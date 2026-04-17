import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ScrollToTopButton } from './ScrollToTopButton';
import { SectionRevealer } from './SectionRevealer';

export function Root() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <SectionRevealer />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
