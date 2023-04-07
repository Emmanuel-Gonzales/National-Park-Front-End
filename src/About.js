import React from "react";
import { Component } from "react";
import Footer from './Footer';
import "./About.css";


class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return <div className='hero-container'>
    <p className='textName'> Authors: <br/>Ryan Apodaca <br/>Darshon Crudup <br/>Stephen Levesque <br/>Emmanuel Gonzales <br/>
    </p>
    </div>
  }
};

export default About;