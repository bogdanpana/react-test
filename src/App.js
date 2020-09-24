import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Header/navbar.component';
import Post from './Components/Post/post.component';

class App extends Component {
  constructor(props) {
      super(props)    
      this.state = {           
        title: "",
        description: "",
        posts: [
          {
            title: "1st post",
            description: "1st description"
          },  
          {
            title: "2nd post",
            description: "2nd description"
          } 
        ]
        
      }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Post title="dada"/>
        <Post title="dada2"/>

      {this.state.posts.map(item => (
      <Post title={item.title} description ={item.description}/>
      ))
      }

      </div>
      );
  }
}

export default App;
