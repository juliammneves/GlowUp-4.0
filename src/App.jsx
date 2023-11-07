import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Função para alternar entre os modos claro e escuro
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Adicione ou remova a classe no elemento body com base no novo estado
    if (newDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Navbar onToggleDarkMode={toggleDarkMode} />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
