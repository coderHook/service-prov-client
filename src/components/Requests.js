import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';

const Event = (props) => {
  return (
    <div>
      <Card style={{'width': '400px', 'margin': '50px'}}>

          <CardBody style={{'textAlign': 'center'}}>

            <CardTitle>
              <h3>{props.name}</h3>
            </CardTitle>

            <CardSubtitle>

              <b>Date:</b> {props.startDate} / {props.endDate} 

            </CardSubtitle>
            
            <CardText style={{'marginTop': '25px'}}>{ props.description }</CardText>
            <CardText style={{'marginTop': '25px'}}>
              <ul>
              { props.stack.map(s => <ListGroup>
                <ListGroupItem>
                  {s}
                </ListGroupItem>
              </ListGroup>) }
              </ul>
            </CardText>
            <div>
              <Button className="mr-3" color="success" disabled={props.disabled}>Accept</Button>
              <Button color="warning" disabled={props.disabled}>Decline</Button>
            </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Event;