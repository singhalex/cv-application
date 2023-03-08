import React, { Component } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import DisplayCV from './components/DisplayCV'

class App extends Component {
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
    const { name, email, title, phone, description } = this.state;
        e.preventDefault();
        this.setState({
            personal: {
                name: name,
                email: email,
                title: title,
                phone: phone,
                description: description,
            }
        });
    }

  render() { 
    const { name, email, title, phone, description } = this.state.personal;

    return (
    <div className='container'>
        <Personal
          onChange={this.handleChange}
          onClick={this.handleSubmit}
          name={this.state.name}
        />
        <Education />
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
 
export default App;

