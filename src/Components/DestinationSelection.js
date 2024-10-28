import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './DestinationSelection.css'; // Custom CSS for additional styling

const destinations = [
  {
    title: "Bali, Indonesia",
    caption: "A tropical paradise known for its beautiful beaches and vibrant culture.",
    imageUrl: "https://example.com/bali.jpg", // Replace with actual image URL
  },
  {
    title: "Paris, France",
    caption: "The city of love, famous for its art, fashion, and the iconic Eiffel Tower.",
    imageUrl: "https://example.com/paris.jpg", // Replace with actual image URL
  },
  {
    title: "Tokyo, Japan",
    caption: "A bustling metropolis blending traditional culture with modern technology.",
    imageUrl: "https://example.com/tokyo.jpg", // Replace with actual image URL
  },
];

const DestinationSelection = () => {
  return (
    <div className="destination-selection">
      <h1 className="text-center">Choose Your Destination</h1>
      <Row className="justify-content-center">
        {destinations.map((destination, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="destination-card">
              <div
                className="card-background"
                style={{
                  backgroundImage: `url(${destination.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                }}
              />
              <Card.Body>
                <Card.Title>{destination.title}</Card.Title>
                <Card.Text>{destination.caption}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DestinationSelection;
