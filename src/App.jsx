  import React, { Component } from 'react';
  import Personal from './components/Personal';
  import Education from './components/Education';
  import Practical from './components/Practical';
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

        position: '',
        company: '',
        jobDescription: '',

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
        },

        practical: {
          position: '',
          company: '',
          jobDescription: '',
          
        }
      }
    }
    
    handleChange = (e, property) => {
        this.setState({
          [property]: e.target.value,
        });
      }
      
    handleSubmit = (e) => {
      const { name, email, title, phone, description, school, degree, from, to, position, company, jobDescription } = this.state;
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
            practical: {
              position: position,
              company: company,
              jobDescription: jobDescription,
              },
          });
      }

    render() { 
      const { name, email, title, phone, description } = this.state.personal;
      const { school, degree, from, to } = this.state.education;
      const { position, company, jobDescription } = this.state.practical;

      return (
      <div className='container'>
          <Personal
            onChange={this.handleChange}
            onClick={this.handleSubmit}
          />
          <Education onChange={this.handleChange} />
          <Practical onChange={this.handleChange} />
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
            position={position}
            company={company}
            jobDescription={jobDescription}
          />
      </div>
      );
    }
  }
  
  export default App;

