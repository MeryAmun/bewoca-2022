import { Nav, Button, Card } from "react-bootstrap";
import './aside.css'
const AsideCard = ({ title, text, image, buttonTitle }) => {
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
            <Nav.Link href="/donate">{buttonTitle}</Nav.Link>
          </Nav.Item>
        </Button>
      </Card.Body>
    </Card>
  );
};
export default AsideCard;
