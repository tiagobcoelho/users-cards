import React, { Component } from 'react';
import './Cards.css';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';




class Cards extends Component {

    removeCard = (event) => {
        event.preventDefault()
        console.log(this.props.name)
        this.props.removeCard(this.props.name)
    }

    render() {
        const { name, location, email, phone } = this.props;
            return(
                <div className='cards'>
                    <TiDelete onClick={this.removeCard} className='icon delete'/>
                    <div className='user-name-wrapper'>
                        <FaUserAlt className='user-icon' />
                        <h4 className='user-name'>{name}</h4>
                    </div>
                    <div className='user-section-wrapper'>
                        <button className='button-icon'><MdLocationOn className='icon'/></button>
                        <p className='user-location'>{location}</p>
                    </div>
                    <div className='user-section-wrapper'>
                        <button className='button-icon'><MdEmail className='icon' /></button>
                        <p className='user-email'>{email}</p>
                    </div>
                    <div className='user-section-wrapper'>
                        <button className='button-icon'><FaPhone className='icon' /></button>
                        <p className='user-phone'>{phone}</p> 
                    </div>
                </div>
                   
                )
        }
}
export default Cards