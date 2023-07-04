import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../assets/bg.png'

const RigthNav = () => {
  return (
    <div>
      <div>
        {" "}
        <h4>Login With</h4>
        <Button variant="outline-primary" className="mb-3">
          {" "}
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login With Github
        </Button>
      </div>
      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item disabled>
            {" "}
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter />
            Twiter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" 
        
        />
      </div>
    </div>
  );
};

export default RigthNav;
