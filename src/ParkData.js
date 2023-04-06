import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';


class ParkData extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     imageDescriptionWeatherData: {}
  //   }
  // }

  createUserPark = async () => {
    let parkObj = {
      parkName: this.props.selectedPark.name,
      location: this.props.selectedPark.locations,
      parkWebsite: this.props.selectedPark.url,
      parkDescription: this.props.imageDescriptionWeatherData.description,
      parkImages: this.props.imageDescriptionWeatherData.images[0].url,
      parkWeather: this.props.imageDescriptionWeatherData.weather,
      parkCommentary: '',
      parkVisited: false
    }

    try {
      let url = `${process.env.REACT_APP_SERVER}/parks`;

      let createdPark = await axios.post(url, parkObj);

      
      this.props.handleCreatePark(createdPark);

      alert("Park Saved!");
     
    } catch (error) {
      alert("Can't save park.");
      console.log(error.message)
    }
  }

  render() {

    console.log(this.state)
    return (
      <>
        {Object.keys(this.props.imageDescriptionWeatherData).length > 0 && <img src={this.props.imageDescriptionWeatherData.images[0].url} />}
        {<h1>{this.props.selectedPark.name}</h1>}
        {<p>{this.props.imageDescriptionWeatherData.description}</p>}
        <Button onClick={this.createUserPark} variant="success">Save to My Parks</Button>

      </>

    )
  }

}

export default ParkData;

