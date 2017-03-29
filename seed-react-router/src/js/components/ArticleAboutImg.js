import React from "react";
import imgabout from './img-about.jpg';

export default class Article extends React.Component {
  render() {
    const { title } = this.props; 
	
    return (
      <div class="col-md-6"> 
		 <img class="img-about" src={imgabout} alt="Logo" />
      </div> 
    );
  }
}
