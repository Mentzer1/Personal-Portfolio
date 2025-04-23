import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './Components/LoadingScreen/LoadingScreen'
import "./index.css"
import { NavBar } from './Components/NavBar/NavBar';
import { MobileMenu } from './Components/MobileMenu/MobileMenu';
import { Home } from './Components/Sections/Home/Home';
import { About } from './Components/Sections/About/About';
import { Projects } from './Components/Sections/Projects/Projects';
import { Contact } from './Components/Sections/Contact/Contact';

function App() {

  const[isLoaded, setIsLoaded] = useState(false);
  const[menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100": "opacity-0"
        } bg-black text-gray-100`}>

          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </div>
    </>
  );
}

export default App
