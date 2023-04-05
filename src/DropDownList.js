import axios from "axios";
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
// import { act } from "react-dom/test-utils";
import { withRouter } from "./WithRouter";

class DropDownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityID: '',
      parkCode: '',
      imageDescriptions: [],
      parkData: [],
      activities: [],
      userParkData: [],
    }
  }

  getActivities = async () => {
    try {

      let url = `${process.env.REACT_APP_SERVER}/activities`;

      let activityData = await axios.get(url);

      this.setState({
        activities: activityData.data,
      })

    } catch (error) {
      console.error(error.response);
    }
  }


  componentDidMount() {
    this.getActivities();
  }

  handleSelect = async (id) => {
    console.log(id);
    try {

      let url = `${process.env.REACT_APP_SERVER}/activityParks?activityID=${id}`;

      let parkData = await axios.get(url);

      this.setState({
        parkData: parkData.data,
        parkCode: parkData.data.parkCode
      })

    

    } catch (error) {
      console.error(error.response);
    }
  }


  handleParkNavigation = async (park) => {
    // await this.getParkDetails(park)
    // console.log(park)
    this.props.updateSelectedPark(park)
    this.props.navigate('/ParkData')
  }



  render() {
    console.log(this.state);
    return (
      <>
        <Dropdown onSelect={this.handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose your Favorite Activity!
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {this.state.activities.length && this.state.activities.map(activity => <Dropdown.Item eventKey={activity.id}>{activity.name}</Dropdown.Item>)}
            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
        {this.state.parkData.length > 0 ? 
        this.state.parkData.map(park => <p onClick={() => {this.handleParkNavigation(park)}}>{park.name}</p>)
        : null
      }
     
      </>

    );

  }

}



export default withRouter(DropDownList);

  // getParkDetails = async(parkObj) => {
  //   try {

  //         let url = `${process.env.REACT_APP_SERVER}/descriptionImages?parkCode=${parkObj.parkCode}`;
    
  //         let imageDescrData = await axios.get(url);
    
  //         this.setState({
  //           imageDescriptions: imageDescrData.data
  //         })
    
  //       } catch (error) {
  //         console.error(error.response);
  //       }
  // }