import React, { Component } from 'react';

class AddCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            city:'',
            email:'',
            phone:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            name: '',
            city:'',
            email:'',
            phone:'',
        })
    }

    addUser = (event) => {
        event.preventDefault();
        this.props.addUser(this.state)
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit} className="sign-up-container">
                    <div className="sign-up-title">
                        <h3>New Person</h3>
                    </div>
                        
                    <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" className="form-input" name='name' />
                    
                    <input type="text" value={this.state.city} onChange={this.handleChange} placeholder="City" className="form-input" name='city' />
                        
                    <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" className="form-input" name='email' />

                    <input type="text" value={this.state.phone} onChange={this.handleChange} placeholder="Phone Number" className="form-input" name='phone' />

                    <button type="submit" onClick={this.addUser} className="button">Create New User</button>
            </form>    
        )
    }
}

export default AddCard