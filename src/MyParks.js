import React from 'react';
import MyParkCard from './MyParkCard';


class MyParks extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tempParks: this.props.myParks
  //   }
  // }
  

  render() {
    return (
      <>
             {<p>{this.props.imageDescriptionWeatherData.description}</p>}
        {console.log(this.props.imageDescriptionWeatherData.descriptions)}
        {this.props.myParks.map((park, idx) => {
          
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
              deleteUserPark={this.props.deleteUserPark}
              updateUserPark={this.props.updateUserPark}
            />
          )
        })}
      </>
    )
  }
}

export default MyParks;