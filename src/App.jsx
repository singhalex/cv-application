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
        e.preventDefault();
        this.setState({
            personal: {
                name: this.state.name,
                email: this.state.email,
                title: this.state.title,
                phone: this.state.phone,
                description: this.state.description,
            }
        });
    }

  render() { 
    return (
    <div className='container'>
        <Personal
          onChange={this.handleChange}
          onClick={this.handleSubmit}
          name={this.state.name}
        />
        <Education />
        <DisplayCV
          name={this.state.personal.name}
          email={this.state.personal.email}
          title={this.state.personal.title}
          phone={this.state.personal.phone}
          description={this.state.personal.description}
        />
    </div>
    );
  }
}
 
export default App;

