import {  Carousel } from 'react-bootstrap';
import './carouselCard.css'


const CarouselCard = ({image,image1,image2,image3,image4, title1,title2,title3,title4, title5}) => {

    return (
        <Carousel className="fluid d-block w-100 carouselCard">
        <Carousel.Item>
          <Carousel.Caption>
            <h1 className=" title font-weight-normal">{title1}</h1>
          </Carousel.Caption>
          <img
            className="carolImage d-block w-100"
            src={image}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <h1 className=" title font-weight-normal ">{title2}</h1>
          </Carousel.Caption>
          <img
            className="carolImage d-block w-100"
            src={image1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <h1 className=" title font-weight-normal">{title3}</h1>
          </Carousel.Caption>
          <img
            className="carolImage d-block w-100"
            src={image2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <h1 className=" title font-weight-normal">{title4}</h1>
          </Carousel.Caption>
          <img
            className="carolImage d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}
export default CarouselCard