import React, { Component } from 'react';
import './Cards.css'
import { MdAddCircle } from 'react-icons/md';

function validate (name, address, email, phone) {
    return {
        name: name.length === 0,
        address: address.city.length === 0,
        email: email.length === 0,
        phone: phone.length === 0,
    };
};

class AddCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 11,
            name: '',
            address:{
                city: '',
            },
            email: '',
            phone: '',
        };
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if(name === 'address'){
            this.setState({
                address:{
                    city:value,
                },
                id:this.state.id,
            });
        }else{
            this.setState({
                [name]: value,
            });
        };
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            id: this.state.id + 1,
            name: '',
            address: {
                city: ''
            },
            email: '',
            phone: '',
        });
    };



    render() {
        const { name, address, email, phone } = this.state;
        const errors = validate(name, address, email, phone);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (
            <form onSubmit={this.handleSubmit} className="sign-up-container">

                    <div className="sign-up-title">
                        <h3>New Person</h3>
                    </div>
                        
                    <input type="text" value={name} onChange={this.handleChange} placeholder="Name" className="form-input" name='name' />
                    
                    <input type="text" value={address.city} onChange={this.handleChange} placeholder="City" className="form-input" name='address' />
                        
                    <input type="email" value={email} onChange={this.handleChange} placeholder="Email" className="form-input" name='email' />

                    <input type="text" value={phone} onChange={this.handleChange} placeholder="Phone Number" className="form-input" name='phone' />

                    <button type="submit" disabled={isDisabled} className={isDisabled? "btn-disabled": "btn-enabled"}><MdAddCircle className={isDisabled? "icon-disabled": "icon-enabled"}/></button>
            </form>    
        );
    };
};

export default AddCard