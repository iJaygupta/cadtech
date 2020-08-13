import React from "react";
import SliderContent from "./SliderContent";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import 'normalize.css/normalize.css';
import './HeaderSlider.scss'

const HeaderSlider = () => {
  return (
      <Slider className="slider-wrapper" autoplay={3000}>
      {SliderContent.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button className="HmSeBtn">{item.button}</button>
					</div>
				</div>
			))}
      </Slider>
  );
};

export default HeaderSlider;
