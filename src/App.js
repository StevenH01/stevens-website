import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import MainPage from './components/MainPage';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Contact />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
