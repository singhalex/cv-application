import React, { Component } from 'react';
import "../styles/personal.css"

class Personal extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            title: '',
            phone: '',
            description: '',
        }
    }

    handleChange = (e, property) => {
        this.setState({
            [property]: e.target.value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() { 
        // const { name, email, title, phone } = this.state;
        
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Personal Information</legend>
                        <label htmlFor="nameInput">Name: </label>
                        <input
                            type="text"
                            id='nameInput'
                            placeholder='Name'
                            onChange={(e) => this.handleChange(e, 'name')}
                        />
                        
                        <label htmlFor="emailInput">Email: </label>
                        <input
                            type="text"
                            id='emailInput'
                            placeholder='email'
                            onChange={(e) => this.handleChange(e, 'email')}
                        />
                        
                        <label htmlFor="titleInput">Title</label>
                        <input
                            type="text"
                            id='titleInput'
                            placeholder='Title'
                            onChange={(e) => this.handleChange(e, 'title')}
                        />

                        <label htmlFor="phoneInput">Phone Number</label>
                        <input
                            type="tel"
                            id='phoneInput'
                            placeholder='Phone Number'
                            onChange={(e) => this.handleChange(e, 'phone')} 
                        />
                        
                        <label htmlFor="descriptionInput">Description</label>
                        <textarea
                            name="description"
                            id="descriptionInput"
                            cols="100" rows="10"
                            onChange={(e) => this.handleChange(e, 'description')}
                        ></textarea>
                    </fieldset>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Personal;