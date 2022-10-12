import {  Carousel } from 'react-bootstrap';
import './carouselCard.css'


const CarouselCard = ({image,image1,image2,image3,image4, title1,title2,title3,title4, title5}) => {

    return (
        <Carousel className="fluid d-block w-100 carouselCard">
        <Carousel.Item>
          <Carousel.Caption>
            <h1 className=" title font-weight-normal">{title1}</h1>
          </Carousel.Caption>
          <div className='carouselCardImage'>
          <img
            className="d-block w-100"
            src={image}
            alt="Third slide"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <h1 className=" title font-weight-normal ">{title2}</h1>
          </Carousel.Caption>
          <div className='carouselCardImage'>
          <img
            className="d-block w-100"
            src={image1}
            alt="Third slide"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <h1 className=" title font-weight-normal">{title3}</h1>
          </Carousel.Caption>
          <div className='carouselCardImage'>
          <img
            className="d-block w-100"
            src={image2}
            alt="Third slide"
          />
          </div>
        </Carousel.Item>
      </Carousel>
    )
}
export default CarouselCard