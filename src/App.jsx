  import React, { Component } from 'react';
  import Personal from './components/Personal';
  import Education from './components/Education';
  import Practical from './components/Practical';
  import DisplayCV from './components/DisplayCV';
  import "./styles/app.css"

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
        },
        
        showForm: true,
        showCV: false,
      }
    }
    
    handleChange = (e, property) => {
        this.setState({
          [property]: e.target.value,
        });
      }
      
    handleSubmit = (e) => {
      const {
        name,
        email,
        title,
        phone,
        description,
        school,
        degree,
        from,
        to,
        position,
        company,
        jobDescription
      } = this.state;

      e.preventDefault();
      this.switchDisplay();

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

    switchDisplay = () => {
      this.setState({
        showForm: !this.state.showForm,
        showCV: !this.state.showCV,
      })
    }
    

    render() { 
      const { name, email, title, phone, description } = this.state.personal;
      const { school, degree, from, to } = this.state.education;
      const { position, company, jobDescription } = this.state.practical;

      return (
      <div className='container'>
          {this.state.showForm &&
          <form onSubmit={this.handleSubmit}>
            <Personal onChange={this.handleChange} state={this.state} />
            <Practical onChange={this.handleChange} state={this.state} />
            <Education onChange={this.handleChange} state={this.state} />
            <button type='submit'>Submit</button>
          </form>}
          {this.state.showCV &&
          <React.Fragment>
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
            <button onClick={this.switchDisplay}>Edit</button>
          </React.Fragment>
          }
      </div>
      );
    }
  }
  
  export default App;

