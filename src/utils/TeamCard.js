import React from 'react'
import user  from '../assets/img/user.jpeg'
import cardImage from '../assets//img/service-section.jpeg'
import {Link} from 'react-router-dom';
import './TeamCard.scss';

const TeamCard = (props) => {
    return (
        <div className="card">
            <img src={cardImage} alt="card background" className="card-img" />
            <img src={user} alt="profile" className="profile-img" />
            <h1>Ravi Dubey</h1>
            <p className="job-title">Web Developer</p>
            <p className="profile-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, repellendus. </p>
            <a className="btn-contact">Contact</a>
            <ul className="social-media">
                <li><Link to="/home"><i className="fab fa-facebook-square"></i></Link></li>
                <li><Link to="/home"><i className="fab fa-twitter-square"></i></Link></li>
                <li><Link to="/home"><i className="fab fa-instagram"></i></Link></li>
                <li><Link to="/home"><i className="fab fa-linkedin-in"></i></Link></li>

            </ul>
        </div>
    )
}

export default TeamCard
