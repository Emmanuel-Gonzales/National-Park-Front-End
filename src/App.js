import React from "react";
import Nav from './Nav';
import ParkData from './ParkData';
import DropDownList from './DropDownList';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPark: {},
    }
  }

  updateSelectedPark = (parkObj) => {
    this.setState({
      selectedPark: parkObj,
    })
  }

  render() {
      return(
        <>
           {/* <Nav/> */}
        <Router>
          {/* <Login/>
          <Profile />
          
          // // <Footer />
        <Logout/> */}
            <Nav/>
          <Routes>
            <Route 
              exact path="/"
              element={<DropDownList updateSelectedPark={this.updateSelectedPark} 
              />}
              >
            </Route>
            <Route
              exact path="/ParkData"
              element={<ParkData selectedPark={this.state.selectedPark} />}
              >
            </Route>
            <Route
              exact path="/About"
              element={<About />}
              >
            </Route>
          </Routes>
          {/* <Footer/> */}
        </Router>
        {/* <div className='hero-container'> */}
        {/* <h1>WELCOME TO YOUR NATIONAL PARKS</h1>
      <p>SEARCH DIRECTORY</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </div>
      </div>
        <div className='page-container'>
      {/* <Footer/> */}
    {/* </div> */} */}
      </>
      )
    }
  }
  
  export default App