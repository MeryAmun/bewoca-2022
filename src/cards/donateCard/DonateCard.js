import { Nav, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './donateCard.css'
const DonateCard = ({ title, text, image, buttonTitle ,date}) => {
  return (
    <Card className="card border bg-secondary text-white">
      <div className="asideImage">
        <img className="" src={image} alt="Third slide" />
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
        <Card.Title>
          <h3 className="font-weight-bold text-info asideTitle">{date}</h3>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
export default DonateCard;
