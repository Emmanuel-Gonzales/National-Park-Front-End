import React from 'react';
import axios from 'axios';
import MyParkCard from './MyParkCard';


class MyParks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myParks: []
    }
  }

  getParks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/parks`;

      let parkData = await axios.get(url);
      console.log(parkData);
      this.setState({
        myParks: parkData.data
      })
    } catch (error) {
      console.error(error.response);
    }
  }

  componentDidMount() {
    this.getParks();
  }
  

  updateUserPark = async (parkDataToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/parks/${parkDataToUpdate._id}`;
  
      let updatedPark = await axios.put(url, parkDataToUpdate);
  
      
      let updatedParksArray = this.state.myParks.map(existingPark => {
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
  
      let deletePark = this.state.myParks.filter(park => park._id !== id);
  
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

        {this.state.myParks.map((park, idx) => {

          return (
            <MyParkCard
              park={park}
              key={idx}
              name={park.parkName}
              location={park.location}
              website={park.parkWebsite}
              weather={park.parkWeather}
              description={park.parkDescription}
              _id={park._id}
              parkImages={park.parkImages}
              commentary={park.parkCommentary}
              parkVisited={park.parkVisited}
              deleteUserPark={this.deleteUserPark}
              updateUserPark={this.updateUserPark}
            />
          )
        })}
      </>
    )
  }
}

export default MyParks;