import React from 'react'
import USER from '../assets/img/user.jpeg';
const TestimonialsCard = (props) => {
    return (
        <div className="testi-item">
           <div className="single-testimonial">
               <div className="img-area">
                   <img src={USER} alt="" className="img" />
               </div>
               <div className="testi-text">
                   <h4>Mark Zuck <span>Software Developer</span></h4>
                   <p>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has

                   </p>
               </div>

           </div>
        </div>
    )
}

export default TestimonialsCard
