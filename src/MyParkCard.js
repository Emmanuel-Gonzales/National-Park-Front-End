import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class MyParkCard extends React.Component {



  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.parkImages} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.props.weather}
            </Card.Text>
            <Card.Text>
              {this.props.location}
            </Card.Text>
            <Card.Text>
              {this.props.website}
            </Card.Text>
            <input onInput={this.props.updateUserPark(this.props.park)} type="text" />
            <input
              type="checkbox"
              checked={this.props.parkVisited}
              // onChange={this.props.parkVisited ? false : true}
            />
            <Button
              onClick={this.props.updateUserPark(this.props.park)}
              variant="primary">Update Park Card</Button>
            <Button
              onClick={this.props.deleteUserPark(this.props._id)}
              variant="primary">Delete Park Card</Button>
          </Card.Body>
        </Card>


      </>
    )
  }
}



















export default MyParkCard;