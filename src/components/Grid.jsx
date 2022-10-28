import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Grid = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1>Assalamualaikum Test Grid</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Grid;
