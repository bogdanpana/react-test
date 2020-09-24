import React, { Component } from 'react'
import Likes from '../Likes/likes.component'
import CustomButton from '../CustomButton/custom-button.component'

import './post.styles.css';
export default class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    return (
           <div className="container">
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <Likes />
            </div>
 
    );
  }
}