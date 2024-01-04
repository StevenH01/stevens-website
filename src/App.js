import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
