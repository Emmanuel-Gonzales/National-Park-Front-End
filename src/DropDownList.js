import axios from "axios";
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
// import { act } from "react-dom/test-utils";
import Table from 'react-bootstrap/Table';
import { withRouter } from "./WithRouter";
import './DropDownList.css'

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
      console.log(this.state.parkCode)
    

    } catch (error) {
      console.error(error.response);
    }
  }


  handleParkNavigation = (park) => {
    console.log(park)
    this.props.getParkDetails(park)
    
    this.props.selectedParkFunction(park)
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
            {this.state.activities.length && this.state.activities.map(activity => <Dropdown.Item key={`item-${activity.id}`} eventKey={activity.id}>{activity.name}</Dropdown.Item>)}

            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
        <div className="my-table-container"> 
        <Table striped bordered hover> 
        <tbody>
        {this.state.parkData.length > 0 ? 
        this.state.parkData.map(park =><tr> <td className="text-center" onClick={() => {this.handleParkNavigation(park)}}>{park.name} ({park.locations})</td></tr>)
        : null
      }
      </tbody>
      </Table>
      </div>
     
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