import {  Carousel } from 'react-bootstrap';
import './carouselCard.css'


const CarouselCard = ({images,image1,image2,image3,image4, title1,title2,title3,title4, title5}) => {

    return (
        <Carousel className="fluid d-block w-100 carouselCard">
        {
images.map((item, index) => (
  <Carousel.Item key={index}>
          <Carousel.Caption>
            <h1 className=" title font-weight-normal">{title1}</h1>
          </Carousel.Caption>
          <div className='carouselCardImage'>
          <img
            className="d-block w-100"
            src={item}
            alt="Third slide"
          />
          </div>
        </Carousel.Item>
))
        }
      </Carousel>
    )
}
export default CarouselCard