import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav,  Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        {" "}
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>{moment().format("dddd, MMMM D, YYYY")}</small>
        </p>
      </div>
      <div className="d-flex ">
        <Button variant="danger">Latest</Button>
        <Marquee speed={100} className="text-danger bg-light w-75 h-auto p-3 ">
          I can be a React component, multiple React components, or just some
          text......I can be a React component, multiple React components, or
          just some text.....
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
