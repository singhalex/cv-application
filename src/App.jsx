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
            school: '',
            degree: '',
            from: '',
            to: '',
            personal: {
                name: '',
                title: '',
                phone: '',
                description: '',
            },
            education: {
              school: '',
              degree: '',
              from: '',
              to: '',
            }
        }
  }
  
  handleChange = (e, property) => {
        this.setState({
            [property]: e.target.value,
        })
    }
    
  handleSubmit = (e) => {
    const { name, email, title, phone, description, school, degree, from, to } = this.state;
        e.preventDefault();
        this.setState({
            personal: {
                name: name,
                email: email,
                title: title,
                phone: phone,
                description: description,
            },
            education: {
              school: school,
              degree: degree,
              from: from,
              to: to,
            },
        });
    }

  render() { 
    const { name, email, title, phone, description } = this.state.personal;
    const { school, degree, from, to } = this.state.education;

    return (
    <div className='container'>
        <Personal
          onChange={this.handleChange}
          onClick={this.handleSubmit}
          // name={this.state.name}
        />
        <Education
          onChange={this.handleChange}
        />
        <DisplayCV
          name={name}
          email={email}
          title={title}
          phone={phone}
          description={description}
          school={school}
          degree={degree}
          from={from}
          to={to}
        />
    </div>
    );
  }
}
 
export default App;

