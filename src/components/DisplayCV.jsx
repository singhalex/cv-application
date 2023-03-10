import React, { Component } from 'react';

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
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{title}</p>
                <p>{phone}</p>
                <p>{description}</p>
                <p>{school}</p>
                <p>{degree}</p>
                <p>{from}</p>
                <p>{to}</p>
                <p>{position}</p>
                <p>{company}</p>
                <p>{jobDescription}</p>
            </div>
        );
    }
}
 
export default DisplayCV;