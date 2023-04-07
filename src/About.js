import React from "react";
import { Component } from "react";
import Footer from './Footer';
import './About.css'


class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return <div className='hero-container'>
    <p> Authors: <br/>Ryan Apodaca <br/>Darshon Crudup <br/>Stephen Levesque <br/>Emmanuel Gonzales <br/>
 </p>
    </div>
  }
};
{/* <>
  <div className='hero-container'>

    <h1><i className='fa fa-tree' />WELCOME TO YOUR NATIONAL PARKS</h1>
    <p>SEARCH DIRECTORY</p>
  </div>
</> */}


export default About;