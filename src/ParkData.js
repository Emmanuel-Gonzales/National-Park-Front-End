import React from "react";
import axios from "axios";

// handleParkSubmit = (event) => {


class ParkData extends React.Component {
  //   let parkObj = {

  //   }
  //   this.props.createPark(parkObj);
  // }
  constructor(props){
    super(props);
    this.state = {
      parkData: {}
    }
  }

  getParkDetails = async(parkObj) => {
    try {

          let url = `${process.env.REACT_APP_SERVER}/descriptionImages?parkCode=${parkObj.parkCode}`;
    
          let imageDescrData = await axios.get(url);
    
          this.setState({
            parkData: imageDescrData.data
          })
    
        } catch (error) {
          console.error(error.response);
        }
  }

  componentDidMount(){
    this.getParkDetails(this.props.selectedPark)
  }
  
  createUserPark = async () => {
    let parkObj = {
      parkName: this.props.selectedPark.name,
     location: this.props.parkData.locations,
     parkWebsite: this.state.parkData.url,
     parkDescription: this.state.parkData.description,
     parkImages: this.state.imageDescriptions.images,
     parkCommentary: '',
     parkVisited: false
   }
    
    try {
      let url = `${process.env.REACT_APP_SERVER}/parks`;
  
      let createdPark = await axios.post(url, parkObj);
  
      alert("Park Saved!");

    } catch (error) {
        alert("Can't save park.");
        console.log(error.message)
      }
  }

  render(){

    console.log(this.state)
    return(
      <>
      {Object.keys(this.state.parkData).length > 0 && <img src={this.state.parkData.images[0].url} />}
      </>

    )
  }

}

export default ParkData;

