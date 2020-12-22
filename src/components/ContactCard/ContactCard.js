import {FaInstagram, FaLinkedin} from 'react-icons/fa';

import './ContactCard.css';

import profile from '../assets/profile.png';

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div>
        <img className='profile' src={profile} />
      </div>
      <div className="card-details">
        <div className="insta">
          <FaInstagram className="fa-icon" color="white" />
          <a href="https://instagram.com/andrewjmcgehee">@andrewjmcgehee</a>
        </div>
        <div className="insta">
          <FaInstagram className="fa-icon" />
          <a href="https://instagram.com/programmingai">@programmingai</a>
        </div>
        <div className="linkedin">
          <FaLinkedin className="fa-icon" />
          <a href="https://linkedin.com/in/andrewjmcgehee">andrewjmcgehee</a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;