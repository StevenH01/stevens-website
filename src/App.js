import React from 'react';
import logo from './logo.svg';
import HomePage from './components/HomePage';
import { ThemeProvider } from './ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
