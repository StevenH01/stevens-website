import React from 'react';
import HomePage from './components/HomePage';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <ThemeProvider>
      <HomePage />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
