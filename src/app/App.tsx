/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */

import MainLayout from '@/components/layout/MainLayout';
import DarkProvider from '@/contexts/dark-mode/DarkProvider';
import MobileMenuProvider from '@/contexts/mobile-menu/MobileMenuProvider';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <DarkProvider>
      <MobileMenuProvider>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </MobileMenuProvider>
    </DarkProvider>
  );
}

export default App;
