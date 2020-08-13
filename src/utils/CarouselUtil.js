import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselUtil = (props) => {
    return (
        <Carousel 
        //    autoPlay={true} 
        //    interval={10000}
        //    showThumbs={false}
        //    infiniteLoop={true}
        //    showStatus={false}
        infiniteLoop useKeyboardArrows autoPlay
        >     
            {/* {props.children} */}
            {/* <div style={{color: 'red'}}>
                A
            </div>
            <div>
                B
            </div>
            <div>
                C
            </div>
            <div>
                D
            </div> */}
        </Carousel>
    )
}

export default CarouselUtil
