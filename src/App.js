import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Header/navbar.component';
import Post from './Components/Post/post.component';

function App() {
  return (
    <div>
      <Navbar/>
      <Post title="dada"/>
      <Post title="dada2"/>
    </div>
    );
}

export default App;
