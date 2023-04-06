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
import'./App.css'
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
      myParks: [],
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

  componentDidMount() {
    this.getParkDetails(this.state.selectedPark)
  }
  
  selectedParkFunction = (parkObj) => {
    this.setState({
      selectedPark: parkObj
    })
  }

  handleCreatePark = (createdPark) => {
    console.log(createdPark);
    this.setState({
      myParks: [...this.state.myParks, createdPark.data]
    })
  }

  updateUserPark = async (parkDataToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/parks/${parkDataToUpdate._id}`;
  
      let updatedPark = await axios.put(url, parkDataToUpdate);
  
      
      let updatedParksArray = this.props.myParks.map(existingPark => {
          return existingPark._id === parkDataToUpdate._id ? updatedPark.data
            : existingPark
        })
  
      this.setState({
        myParks: updatedParksArray
      })
  
    } catch (error) {
        console.log(error.message)
    }
  }
  
  deleteUserPark = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/parks/${id}`;
  
      await axios.delete(url);
  
      let deletePark = this.state.userParkData.filter(park => park._id !== id);
  
      this.setState({
        myParks: deletePark
      }) 
  
    } catch (error) {
        console.log(error.response)
    }
  }




  render() {
    return (
      <>
        {/* <Nav/> */}
        <Router>
          <Login />
          <Profile />
          <Logout />
          <Routes>
            <Route
              exact path="/"
              element={<DropDownList 
                selectedParkFunction={this.selectedParkFunction}
                getParkDetails={this.getParkDetails}
                />}
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
                myParks={this.state.myParks}
                
                updateUserPark={this.updateUserPark}
                deleteUserPark={this.deleteUserPark}
              />}
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