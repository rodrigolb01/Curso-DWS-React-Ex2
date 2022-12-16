import React from 'react';
import './App.css';
import PostsList from './components/PostsList/PostsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostsList></PostsList>
      </header>
    </div>
  );
}

export default App;
