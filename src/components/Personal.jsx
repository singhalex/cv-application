import React, { Component } from 'react';
import DisplayCV from './DisplayCV';
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
            personal: {
                name: '',
                title: '',
                phone: '',
                description: '',
            },
        }
    }

    handleChange = (e, property) => {
        this.setState({
            [property]: e.target.value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            personal: {
                name: this.state.name,
                email: this.state.email,
                title: this.state.title,
                phone: this.state.phone,
                description: this.state.description,
            }
        })
    }

    render() { 
        const { name, email, title, phone, description } = this.state.personal;
        
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Personal Information</legend>
                        <div>
                            <label htmlFor="nameInput">Name: </label>
                            <input
                                type="text"
                                id='nameInput'
                                placeholder='Name'
                                onChange={(e) => this.handleChange(e, 'name')}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="emailInput">Email: </label>
                            <input
                                type="text"
                                id='emailInput'
                                placeholder='email'
                                onChange={(e) => this.handleChange(e, 'email')}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="titleInput">Title:</label>
                            <input
                                type="text"
                                id='titleInput'
                                placeholder='Title'
                                onChange={(e) => this.handleChange(e, 'title')}
                            />
                        </div>

                        <div>
                            <label htmlFor="phoneInput">Phone Number:</label>
                            <input
                                type="tel"
                                id='phoneInput'
                                placeholder='Phone Number'
                                onChange={(e) => this.handleChange(e, 'phone')}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="descriptionInput">Description:</label>
                            <textarea
                                name="description"
                                id="descriptionInput"
                                cols="30" rows="10"
                                onChange={(e) => this.handleChange(e, 'description')}
                            ></textarea>
                        </div>
                    </fieldset>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <DisplayCV
                    name={name}
                    email={email}
                    title={title}
                    phone={phone}
                    description={description}
                />
            </div>
        );
    }
}
 
export default Personal;