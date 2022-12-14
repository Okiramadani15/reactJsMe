import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { gbr1, gbr2, gbr3, gbr4 } from "../asset";

const Kartu = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mb-2" xs={12} sm={6} md={6} lg={4}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={gbr1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2" xs={12} sm={6} md={6} lg={4}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={gbr2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2" xs={12} sm={6} md={6} lg={4}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={gbr3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2" xs={12} sm={6} md={6} lg={4}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={gbr4} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2" xs={12} sm={6} md={6} lg={4}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={gbr1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2" xs={12} sm={6} md={6} lg={4}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={gbr2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kartu;
