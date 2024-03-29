import {  Card } from "react-bootstrap";
import './staffCard.css'
const StaffCard = ({ position, name, image, details}) => {
  return (
    <Card className="card border bg-secondary text-white">
      <div className="staffImage">
        <img  src={image} alt="Third slide"  className="rounded-circle"/>
      </div>
      <Card.Body className="d-flex  flex-column justify-content-center align-items-center">
        <Card.Title>
          <h3 className="font-weight-bold text-info asideTitle">{name}</h3>
        </Card.Title>
        <Card.Title>
          <h3 className="font-weight-bold text-info asideTitle">{position}</h3>
        </Card.Title>
        <Card.Text className="asideText">{details}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default StaffCard;
