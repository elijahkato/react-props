import React from "react";
import Player from "./Player";
import players from "./Players";
import { Container, Row, Col } from "react-bootstrap";

function PlayerList() {
  return (
    <Container>
      <h2 className="my-4">Football Players</h2>
      <Row>
        {players.map((player, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayerList;
