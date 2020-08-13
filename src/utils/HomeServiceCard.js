import React from 'react'
import { Link } from 'react-router-dom'

const HomeServiceCard = (props) => {
    return (
        <>
            <div className="col-md-4">
                <div className="single-service">
                    <div className="service-bg service-bg-1">
                       <h2>{props.name}</h2>
                    </div>
                    <div className="service-text">
                       <p>{props.description}</p>
                       <Link to="/contact-us" className="btn-area">
                           Read More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                       </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeServiceCard
