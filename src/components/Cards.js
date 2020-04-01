import React, { Component } from 'react';
import './Cards.css';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';


class Cards extends Component {
    render() {
        const { name, location, email, phone } = this.props;
            return(
                <div className='cards'>
                    <div className='user-name-wrapper'>
                        <FaUserAlt className='user-icon' />
                        <h4 className='user-name'>{name}</h4>
                    </div>
                    <div className='user-section-wrapper'>
                        <button><MdLocationOn className='icon'/></button>
                        <p className='user-location'>{location}</p>
                    </div>
                    <div className='user-section-wrapper'>
                        <button><MdEmail className='icon' /></button>
                        <p className='user-email'>{email}</p>
                    </div>
                    <div className='user-section-wrapper'>
                        <button><FaPhone className='icon' /></button>
                        <p className='user-phone'>{phone}</p> 
                    </div>
                </div>
                   
                )
        }
}
export default Cards