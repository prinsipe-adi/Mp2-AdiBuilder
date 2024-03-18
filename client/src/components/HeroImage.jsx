import React from "react";
import { Carousel } from "react-bootstrap";


function HeroImage () {


return (
    <>
    <Carousel id="#">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src="http://localhost:8000/images/image-1710147855236.jpg" alt="slide" />
        <Carousel.Caption>
          <div className="carousel-caption">
          <h3>Your Dream House</h3>
          <p>“There is nothing more important than a good, safe, secure home.” “Home is a place you grow up wanting to leave, and grow old wanting to get back to.” “There's no place like home.”</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={500}>
        <img className="d-block w-100"  src="http://localhost:8000/images/image-1710147987282.avif" alt="slide" />
        <Carousel.Caption className="carousel-caption">
          <div className="carousel-caption">
          <h3>Always Dedicated</h3>
          <p>In this dynamic house, dedication pulses through every moment, binding together a diverse community committed to continual growth and artistic excellence.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="http://localhost:8000/images/image-1710148048658.avif" alt="slide" />
        <Carousel.Caption className="carousel-caption">
          <div className="carousel-caption">
          <h3>True Construction</h3>
          <p>
          True Construction's commitment remains unwavering—to bring forth projects of exceptional quality, precision, and enduring value.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
)
}

export default HeroImage;