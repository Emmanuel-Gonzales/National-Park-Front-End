import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';



class MyParkCard extends React.Component {
  handleUpdateSubmit = (event) => {
    event.preventDefault();
    this.props.park.parkCommentary = event.target.comment.value;
    this.props.park.parkVisited = event.target.checkbox.checked;

    this.props.updateUserPark(this.props.park);
  }


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
            <Card.Text>
              {this.props.park.parkCommentary}
            </Card.Text>


            <Form onSubmit={this.handleUpdateSubmit}>
              <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Change Commentary</Form.Label>
                <Form.Control type="text" placeholder="Enter commentary" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="checkbox">
                <Form.Check type="checkbox" defaultChecked={this.props.park.parkVisited} label="park Visited" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Park Commentary
              </Button>
            </Form>

            <Form onSubmit={()=> this.props.deleteUserPark(this.props._id)}>
              <Button variant="primary" type="submit">
                Delete Park
              </Button>
            </Form>

          </Card.Body>
        </Card>


      </>
    )
  }
}



















export default MyParkCard;