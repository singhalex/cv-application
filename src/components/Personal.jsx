import React, { Component } from 'react';
import "../styles/personal.css"

class Personal extends Component {
    render() { 
        const { onChange, onClick } = this.props;

        return (
            <form>
                <fieldset>
                    <legend>Personal Information</legend>
                    <div>
                        <label htmlFor="nameInput">Name: </label>
                        <input
                            type="text"
                            id='nameInput'
                            placeholder='Name'
                            onChange={(e) => onChange(e, 'name')}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="emailInput">Email: </label>
                        <input
                            type="text"
                            id='emailInput'
                            placeholder='email'
                            onChange={(e) => onChange(e, 'email')}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="titleInput">Title:</label>
                        <input
                            type="text"
                            id='titleInput'
                            placeholder='Title'
                            onChange={(e) => onChange(e, 'title')}
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneInput">Phone Number:</label>
                        <input
                            type="tel"
                            id='phoneInput'
                            placeholder='Phone Number'
                            onChange={(e) => onChange(e, 'phone')}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="descriptionInput">Description:</label>
                        <textarea
                            name="description"
                            id="descriptionInput"
                            cols="30" rows="10"
                            onChange={(e) => onChange(e, 'description')}
                        ></textarea>
                    </div>
                </fieldset>
                <button onClick={onClick}>Submit</button>
            </form>
    );
    }
}
 
export default Personal;