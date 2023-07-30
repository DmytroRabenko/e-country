import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../assets/slider1.png'
import slider2 from '../../../assets/slider2.png'
import slider3 from '../../../assets/slider3.png'

//import 'bootstrap/dist/css/bootstrap.min.css';

const HomeCarousel = () => {

    return(
        <Carousel>
            <Carousel.Item interval={3000}>
                <Link to={'/contacts'}>
                    <img className="d-block w-100"
                    src={slider1}
                    alt="slider1"
                    />
                </Link>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Link to={'/changes'}>
                    <img className="d-block w-100"
                    src={slider2}
                    alt="slider2"
                    />
                 </Link>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Link to={'/tv'}>
                    <img className="d-block w-100"
                    src={slider3}
                    alt="slider3"
                    />
                 </Link>
            </Carousel.Item>
        </Carousel>

    )
}

export default HomeCarousel;