import React from "react";
import { Component } from "react";
import "./About.css";


class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>

        <div className='hero-container'>
          <p className='textName'> Authors: <br />Ryan Apodaca <br />Darshon Crudup <br />Stephen Levesque <br />Emmanuel Gonzales <br />
          </p>
        </div>
        <div class="pic">
          <img src={require('./img/Ryan.jpeg')} alt="Ryan" />
          <img src={require('./img/Darshon.png')} alt="Darshon" />
          <img src={require('./img/stephen.jpg')} alt="Stephen" />
          <img src={require('./img/Manny.jpeg')} alt="Manny" />
        </div>
      </>
    )
  }
};

export default About;