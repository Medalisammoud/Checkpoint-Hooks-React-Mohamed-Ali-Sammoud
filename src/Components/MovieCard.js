import React from "react";
import Rating from "react-rating-stars-component";
import {Card,ListGroupItem,ListGroup } from "react-bootstrap";


const MovieCard =(props)=>{
  console.log(props.rate);
  return (
      <Card style={{ width: "18rem", marginLeft:'30px',marginTop: '10px'}}>
        <Card.Img style={{ height: "15rem" }} variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><Rating
              count={5}
              size={24}
              edit={false}
              value={ props.rate }
              activeColor="#ffd700"
            /></ListGroupItem>
        </ListGroup>
      </Card>
    );
}

export default MovieCard;