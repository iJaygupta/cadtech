import React from 'react'
import USER from '../assets/img/vatsal.jpg';
const TestimonialsCard = (props) => {
    return (
        <div className="testi-item">
           <div className="single-testimonial">
               <div className="img-area">
                   <img src={USER} alt="" className="img" />
               </div>
               <div className="testi-text">
                   <h4>Vatsal Sharma<span>Software Developer</span></h4>
                   <p>
                   Enthusiasm is contagious. If you’re passionate about bath fizzies, tell us why! Let people know that ever since you learned how to make this fabulous product, your life hasn’t been the same. And how you want everyone to experience that too. 

                   </p>
               </div>

           </div>
        </div>
    )
}

export default TestimonialsCard
