import React, { Component } from 'react';

class DisplayCV extends Component {
    render(props) { 
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.title}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
 
export default DisplayCV;