import React, { Component } from 'react';
import './AddCard.css'

class AddCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address:{
                city:''
            },
            email:'',
            phone:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target
        const name = target.name
        const value = target.value;
        if(name === 'address' && value !== ''){
            this.setState({
                address:{
                    city:value
                }
            })
        }else if(value !== ''){
            this.setState({
                [name]: value,
            });
        }
        
        
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            name: '',
            address:{
                city:''
            },
            email:'',
            phone:'',
        })
    }

    addUser = (event) => {
        event.preventDefault();
        this.props.addUser(this.state)
    }


    render(){
        const { name, address, email, phone } = this.state
        const isEnabled = name.length > 0 && address.city.length > 0 && email.length > 0 && phone.length > 0;
        return(
            <form onSubmit={this.handleSubmit} className="sign-up-container">
                    <div className="sign-up-title">
                        <h3>New Person</h3>
                    </div>
                        
                    <input type="text" value={name} onChange={this.handleChange} placeholder="Name" className="form-input" name='name' />
                    
                    <input type="text" value={address.city} onChange={this.handleChange} placeholder="City" className="form-input" name='address' />
                        
                    <input type="email" value={email} onChange={this.handleChange} placeholder="Email" className="form-input" name='email' />

                    <input type="text" value={phone} onChange={this.handleChange} placeholder="Phone Number" className="form-input" name='phone' />

                    <button disabled={!isEnabled} type="submit" onClick={this.addUser} className={!isEnabled? "btn-disabled": "btn-enabled"}>{!isEnabled? 'Fill All Fields':'Create New User'}</button>
            </form>    
        )
    }
}

export default AddCard