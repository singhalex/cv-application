import React, { Component } from 'react';

class Education extends Component {
    state = {  } 
    render() { 
        const {onChange} = this.props
        return (
            <fieldset>
                <legend>Education:</legend>
                <div>
                    <label htmlFor="schoolName">Shool Name</label>
                    <input
                        type="text"
                        id="schoolName"
                        placeholder='School Name'
                        onChange={(e) => onChange(e, 'school')}
                    />
                </div>

                <div>
                    <label htmlFor="degree">Degree:</label>
                    <input
                        type="text"
                        id='degree'
                        placeholder='Degree'
                        onChange={(e) => onChange(e, 'degree')}
                    />
                </div>

                <div>
                    <label htmlFor="from">From:</label>
                    <input
                        type="text"
                        id='from'
                        placeholder='From'
                        onChange={(e) => onChange(e, 'from')}
                    />
                </div>

                <div>
                    <label htmlFor="to">To:</label>
                    <input
                        type="text"
                        inputMode='to'
                        placeholder='To'
                        onChange={(e) => onChange(e, 'to')}
                    />
                </div>
            {/* <button>Delete</button> */}
            {/* <button>Add</button> */}
            </fieldset>
        );
    }
}
 
export default Education;