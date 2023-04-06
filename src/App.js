import React from "react";
import Nav from './Nav';
import ParkData from './ParkData';
import DropDownList from './DropDownList';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import'./App.css'
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
        <Logout/> */}
        <Routes>
          <Route 
            exact path="/"
            element={<DropDownList updateSelectedPark={this.updateSelectedPark} />}
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
        {/* <Footer /> */}
      </Router>
    </>
    )
  }
}

export default App