import React, { Component } from 'react';
import './Cards.css';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { FaEdit } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';


function validate (name, address, email, phone) {
    return{
        name: name.length === 0,
        address: address.city.length === 0,
        email: email.length === 0,
        phone: phone.length === 0,
    };
};

class Cards extends Component {
        constructor(props) {
            super(props);
            this.state = {
                id: this.props.id,
                name: this.props.name,
                address: {
                    city: this.props.location,
                },
                email: this.props.email,
                phone: this.props.phone,
                editMode: false,
            };
        };
        

    removeCard = (event) => {
        event.preventDefault();
        this.props.removeCard(this.props.name);
    };

    editUser = (event) => {
        event.preventDefault();
        this.setState({
            editMode:true
        });
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (name === 'address'){
            this.setState({
                address:{
                    city:value,
                }
            })
        } else {
            this.setState({
                [name]: value,
            });
        };
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateUser(this.state);
        this.setState({
            editMode:false,
        }); 
    };


    render() {
        const { name, location, email, phone } = this.props;
        const { editMode } = this.state;
        const errors = validate(this.state.name, this.state.address, this.state.email, this.state.phone);
        let isDisabled = Object.keys(errors).some(x => errors[x]);
            return (
                <div>
                    <div className={editMode? 'cards-none':'cards'}>
                        <FaEdit onClick={this.editUser} className='icon edit'/>
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
                            <button className='button-icon'><FaPhone className='icon' /></  button>
                            <p className='user-phone'>{phone}</p> 
                        </div>
                    </div>
            
                    <form onSubmit={this.handleSubmit} className={editMode? 'sign-up-container': 'sign-up-container-none'}>
                        <div className="sign-up-title">
                            <h3>Edit Info</h3>
                        </div>

                        <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" className="form-input" name='name' />

                        <input type="text" value={this.state.address.city} onChange={this.handleChange} placeholder="City" className="form-input" name='address' />

                        <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" className="form-input" name='email' />

                        <input type="text" value={this.state.phone} onChange={this.handleChange} placeholder="Phone Number" className="form-input" name='phone' />

                        <button type="submit" disabled={isDisabled} className={isDisabled? "btn-disabled": "btn-enabled"}><MdAddCircle className={isDisabled? "icon-disabled": "icon-enabled"} /></button>
                    </form> 
                </div>   
            );
    };
};

export default Cards