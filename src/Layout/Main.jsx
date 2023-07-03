import React from "react";
import Header from "../Shared/header/Header";
import Footer from "../Shared/Footer/Footer";
import LeftNav from "../Shared/LeftNav/LeftNav.jsx";
import RigthNav from "../Shared/RigthNav/RigthNav.jsx";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Shared/RigthNav/RigthNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}> <LeftNav></LeftNav></Col>
          <Col lg={6}>
            <h4>Main Content Coming</h4>
          </Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
