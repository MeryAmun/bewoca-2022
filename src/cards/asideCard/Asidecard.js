import { Nav, Button, Card } from "react-bootstrap";
import './aside.css'
import { Link } from 'react-router-dom'


const AsideCard = ({ title, text, image, buttonTitle }) => {
  return (
    <div className="asideCard border bg-secondary text-white">
        <img className="d-block asideFloat d-flex flex-wrap" src={image} alt="Third slide" />
      <Card.Body>
        <Card.Title>
          <h3 className="font-weight-bold text-info asideTitle">{title}</h3>
        </Card.Title>
        <Card.Text className="asideText">{text}</Card.Text>
        <Button className="font-weight-bold bg-dark text-primary">
          {" "}
          <Nav.Item>
            <Link to="/contact" className="link">{buttonTitle}</Link>
          </Nav.Item>
        </Button>
      </Card.Body>
    </div>
  );
};
export default AsideCard;
