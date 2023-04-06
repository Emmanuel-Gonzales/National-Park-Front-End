import React from 'react';
import MyParkCard from './MyParkCard';


class MyParks extends React.Component {



  render() {
    return (
      <>
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