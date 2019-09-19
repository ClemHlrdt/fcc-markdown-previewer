import React from 'react';
import './App.css';
import MarkdownPreviewer from './components/MarkdownPreviewer/MarkdownPreviewer'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
