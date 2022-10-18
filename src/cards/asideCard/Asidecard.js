import { Nav, Button, Card } from "react-bootstrap";
import './aside.css'
import { Link } from 'react-router-dom'


const AsideCard = ({ title, text, image, buttonTitle }) => {
  return (
    <Card className="card border bg-secondary text-white">
      <div className="asideFloat d-flex flex-wrap">
        <img className="d-block" src={image} alt="Third slide" />
      </div>
      <Card.Body>
        <Card.Title>
          <h3 className="font-weight-bold text-info asideTitle">{title}</h3>
        </Card.Title>
        <Card.Text className="asideText">{text}</Card.Text>
        <Button className="font-weight-bold bg-dark text-primary">
          {" "}
          <Nav.Item>
            <Link href="/donate" className="link">{buttonTitle}</Link>
          </Nav.Item>
        </Button>
      </Card.Body>
    </Card>
  );
};
export default AsideCard;
