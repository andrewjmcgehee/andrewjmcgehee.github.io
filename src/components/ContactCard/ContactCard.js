import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

import './ContactCard.css';

import profile from '../assets/profile.jpg';

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div>
        <img className='profile' src={profile}/>
      </div>
      <div className="card-details">
        <div className="linkedin">
          <FaLinkedin className="fa-icon"/>
          <a href="https://linkedin.com/in/andrewjmcgehee" target="_blank">andrewjmcgehee</a>
        </div>
        <div className="github">
          <FaGithub className="fa-icon" color="white"/>
          <a href="https://github.com/andrewjmcgehee" target="_blank">andrewjmcgehee</a>
        </div>
        <div className="insta">
          <FaInstagram className="fa-icon"/>
          <a href="https://instagram.com/andrewjmcgehee" target="_blank">@andrewjmcgehee</a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
