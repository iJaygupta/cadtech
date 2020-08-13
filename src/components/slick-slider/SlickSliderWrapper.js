import React from 'react'
import Slider from 'react-slick';
import { Left, Right } from './SlickArrow';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     dots: true,
// dotsClass: 'dots-class'
//     // nextArrow: <Right />,
//     // prevArrow: <Left />
//   };



const SlickSliderWrapper = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Right />,
        prevArrow: <Left />,
        responsive: [
            {
              breakpoint: 890,
              settings: {
                // arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                // arrows: false,
                slidesToShow: 1
              }
            }
          ]
      };
    return (
        <Slider {...settings}>
        {props.children}
       </Slider> 
    )
}

export default SlickSliderWrapper

