import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './ParkData.css'


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

      console.log(createdPark, "created park");
      this.props.handleCreatePark(createdPark);

      alert("Park Saved!");
     
    } catch (error) {
      alert("Can't save park.");
      console.log(error.message)
    }
  }

  render() {


    return (
      <>

      {<h1>{this.props.selectedPark.name}</h1>}
      {/* <Carousel> 
      {Object.keys(this.state.imageDescriptionWeatherData).length > 0 && this.state.imageDescriptionWeatherData.images.map(image => <Carousel.Item><img src= {image.url} width="300px"/></Carousel.Item>)}
      </Carousel> */}
      {/* {<p>{this.state.imageDescriptionWeatherData.description}</p>} */}
      <Button variant="success">Save to My Parks</Button>


      </>

    )
  }

}

export default ParkData;

