import React, { Component } from 'react';

class Practical extends Component {
    render() { 
        const { onChange } = this.props;

        return (
            <fieldset>
                <legend>Work Experience</legend>
                <div>
                    <label htmlFor="positionEntry">Position:</label>
                    <input
                        type="text"
                        id='positionEntry'
                        placeholder='Position'
                        onChange={(e) => onChange(e, 'position')}
                    />
                </div>
                
                <div>
                    <label htmlFor="companyEntry">Company</label>
                    <input
                        type="text"
                        id='companyEntry'
                        placeholder='Company'
                        onChange={(e) => onChange(e, 'company')}
                    />
                </div>

                <div>
                    <label htmlFor="jobDescription">Description</label>
                    <textarea
                        type="text"
                        id='jobDescription'
                        cols='30' rows='10'
                        onChange={(e) => onChange(e, 'jobDescription')}
                    />
                </div>
            </fieldset>
        );
    }
}
 
export default Practical;