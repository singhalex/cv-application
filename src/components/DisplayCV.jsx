import React, { Component } from 'react';
import '../styles/displayCV.css';

class DisplayCV extends Component {
    
    render(props) {
        const {
            name,
            email,
            title,
            phone,
            description,
            school,
            degree,
            from,
            to,
            position,
            company,
            jobDescription
        } = this.props;
        return (
            <div id='cv-container'>
                <div className='header'>
                    <p id='name'>{name}</p>
                    <p>{title}</p>
                </div>
                <div className="sidebar">
                    <h4 className='bold'>Contact Info</h4>
                    <p>{email}</p>
                    <p  className='subscript'>Email</p>
                    <p>{phone}</p>
                    <p className='subscript'>Phone Number</p>
                </div>
                <div className="main">
                    <h4 className="bold">About</h4>
                    <p>{description}</p>
                    <h4 className="bold">Experience</h4>
                    <p>{position}</p>
                    <p className='subscript'>{company}</p>
                    <p>{jobDescription}</p>
                    <h4 className="bold">Education</h4>
                    <div className="school-display">
                        <div className="years">
                            <p>{from}</p>
                            <p>-</p>
                            <p>{to}</p>
                        </div>
                        <div className="school">
                            <p>{school}</p>
                            <p className='subscript'>{degree}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DisplayCV;