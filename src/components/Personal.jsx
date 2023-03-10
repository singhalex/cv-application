import React, { Component } from 'react';

class Personal extends Component {
    render() { 
        const { onChange } = this.props;

        return (
            <fieldset>
                <legend>Personal Information</legend>
                <div>
                    <label htmlFor="nameInput">Name: </label>
                    <input
                        type="text"
                        id='nameInput'
                        placeholder='Name'
                        onChange={(e) => onChange(e, 'name')}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="emailInput">Email:</label>
                    <input
                        type="text"
                        id='emailInput'
                        placeholder='email'
                        onChange={(e) => onChange(e, 'email')}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="titleInput">Title:</label>
                    <input
                        type="text"
                        id='titleInput'
                        placeholder='Title'
                        onChange={(e) => onChange(e, 'title')}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phoneInput">Phone Number:</label>
                    <input
                        type="tel"
                        id='phoneInput'
                        placeholder='Phone Number'
                        onChange={(e) => onChange(e, 'phone')}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="descriptionInput">Description:</label>
                    <textarea
                        name="description"
                        id="descriptionInput"
                        cols="30" rows="10"
                        onChange={(e) => onChange(e, 'description')}
                        required
                    ></textarea>
                </div>
            </fieldset>
    );
    }
}
 
export default Personal;