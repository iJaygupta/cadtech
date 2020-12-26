import React from 'react'
import cardImage from '../assets//img/service-section.jpeg'
import { Link } from 'react-router-dom';
import './TeamCard.scss';

const TeamCard = (props) => {
    let teamData = props || []
    // if (teamData.length && teamData[3].teamMembers) {
    //   this.setState({ props: teamData[3].teamMembers })


    return (
        <div className="card">
            <img src={cardImage} alt="card background" className="card-img" />
            <img src={props.data.image} alt="profile" className="profile-img" />
            <h1>{props.data.name}</h1>
            <p className="job-title">{props.data.designation}</p>
            <p className="profile-about">{props.data.bio}</p>
            <p className="profile-about">{props.data.phone_number}</p>
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
