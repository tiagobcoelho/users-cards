import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
    render() {
        const { name, location, email, phone } = this.props;
            return(
                <div className='cards-container'>
                    <div className='cars-wrapper'>
                        <div className='cards'>
                        <h4>{name}</h4>
                        <p>{location}</p>
                        <p>{email}</p>
                        <p>{phone}</p>  
                        </div>

                    </div>
                                              
                </div>
                )
        }
}
export default Cards