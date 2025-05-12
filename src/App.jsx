import { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
import { Contact } from './components/section/Contact';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 bg-black text-gray-100 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Contact/>
        {/* Add your main content here */}
        <main className="p-4">
          <h1 className="text-2xl">Welcome to Jesse's Portfolio</h1>
        </main>
      </div>
    </>
  );
}

export default App;
