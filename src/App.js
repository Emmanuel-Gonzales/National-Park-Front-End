import React from "react";
import Nav from './Nav';
import axios from "axios";
import ParkData from './ParkData';
import DropDownList from './DropDownList';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import "./App.css";
import Button from 'react-bootstrap/Button';
import MyParks from './MyParks';
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import './App.css'
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPark: {},
      //myParks: [],//dont need
      imageDescriptionWeatherData: {}
    }
  }


  getParkDetails = async (parkObj) => {
    try {

      let url = `${process.env.REACT_APP_SERVER}/descriptionImages?parkCode=${parkObj.parkCode}`;

      let imageDescrData = await axios.get(url);
      console.log(imageDescrData);

      this.setState({
        imageDescriptionWeatherData: imageDescrData.data
      })

    } catch (error) {
      console.error(error.response);
    }
  }

  selectedParkFunction = (parkObj) => {
    this.setState({
      selectedPark: parkObj
    })
  }

  // handleCreatePark = (createdPark) => {
  //   console.log(createdPark.data);
  //   this.setState({
  //     myParks: [...this.state.myParks, createdPark.data]
  //   })
  // }

  render() {
    return (
      <>
        <Router>
        <Nav />
          {/* <Login /> */}
          <Profile />
          {/* <Logout /> */}
          <Routes>
            <Route
              exact path="/"
              element={
                <>
                  <div className='hero-container'>
                  
                    <h1><i className='fa fa-tree' />WELCOME TO YOUR NATIONAL PARKS</h1>
                    <p>SEARCH DIRECTORY</p>
                    {/* <div className='hero-btns'> */}
                      {/* <Button */}
                        {/* className='btns' */}
                        {/* buttonStyle='btn--outline' */}
                        {/* buttonSize='btn--large' */}
                      {/* > */}
                        {/* GET STARTED */}
                      {/* </Button> */}
                    {/* </div> */}
                  </div>
                  <div className='page-container'>
                  </div>
                  <DropDownList
                    selectedParkFunction={this.selectedParkFunction}
                    getParkDetails={this.getParkDetails}
                  />
                </>
              }
            >
            </Route>
            <Route
              exact path="/ParkData"
              element={<ParkData
                imageDescriptionWeatherData={this.state.imageDescriptionWeatherData}
                selectedPark={this.state.selectedPark}
                handleCreatePark={this.handleCreatePark}
              />}
            >
            </Route>
            <Route
              exact path="/About"
              element={<About />}
            >
            </Route>
            <Route
              exact path="/MyParks"
              element={<MyParks

                // myParks={this.state.myParks}

                updateUserPark={this.updateUserPark}
                deleteUserPark={this.deleteUserPark}
              />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App