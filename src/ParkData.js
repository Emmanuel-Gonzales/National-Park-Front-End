import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import './ParkData.css'

// handleParkSubmit = (event) => {


class ParkData extends React.Component {
  //   let parkObj = {

  //   }
  //   this.props.createPark(parkObj);
  // }
  constructor(props){
    super(props);
    this.state = {
      imageDescriptionWeatherData: {}
    }
  }

  getParkDetails = async(parkObj) => {
    try {

          let url = `${process.env.REACT_APP_SERVER}/descriptionImages?parkCode=${parkObj.parkCode}`;
    
          let imageDescrData = await axios.get(url);
    
          this.setState({
            imageDescriptionWeatherData: imageDescrData.data
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
     location: this.props.selectedPark.locations,
     parkWebsite: this.props.selectedPark.url,
     parkDescription: this.state.imageDescriptionWeatherData.description,
     parkImages: this.state.imageDescriptionWeatherData.images,
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
      {<h1>{this.props.selectedPark.name}</h1>}
      <a href={this.props.selectedPark.url}>Visit Park Webpage</a>
      {<p>{this.state.imageDescriptionWeatherData.description}</p>}
      <Carousel> 
      {Object.keys(this.state.imageDescriptionWeatherData).length > 0 && this.state.imageDescriptionWeatherData.images.map(image => 
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

