import React from 'react'

const HeadingTitle = (props) => {
    return (
        
        <div className="section-title"> 
          <h2 data-aos="fade-in"  style={{color:props.titleColor}}>{props.title}</h2>
         <p data-aos="fade-in" style={{color:props.titleColor}}>{props.description}</p>
        </div>
    )
}

export default HeadingTitle
