import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './ParkData.css'

// handleParkSubmit = (event) => {



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
      // this.props.handleCreatePark(createdPark);

      alert("Park Saved!");
     
    } catch (error) {
      alert("Can't save park.");
      console.log(error.message)
    }
  }

  render() {

    return (
      <>
      <div className="top-container">
      {<h1>{this.props.selectedPark.name}</h1>}
      <a href={this.props.selectedPark.url}>Visit Park Webpage</a>
      {<p>{this.props.imageDescriptionWeatherData.description}</p>}
      </div>
      <Carousel> 
      {Object.keys(this.props.imageDescriptionWeatherData).length > 0 && this.props.imageDescriptionWeatherData.images.map(image => 
      <Carousel.Item>
        <div className="image-container">
          <img src= {image.url} alt={image.altText}/>
          </div></Carousel.Item>)}
      </Carousel>
      <Button variant="success">Save to My Parks</Button>
      </>

    )
  }

}

export default ParkData;

