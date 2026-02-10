import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import StickyMobileCTA from '../conversion/StickyMobileCTA';

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
