import React from 'react'


const TestimonialsCard = (props) => {
    let teamData = props || []

    return (
        <div className="testi-item">
            <div className="single-testimonial">
                <div className="img-area">
                    <img src={props.data.image} alt="" className="img" />
                </div>
                <div className="testi-text">
                    <h4>{props.data.name}<span>{props.data.designation}</span></h4>
                    <p>
                        {props.data.bio}

                    </p>
                </div>

            </div>
        </div>
    )
}

export default TestimonialsCard

