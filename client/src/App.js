import React, { Component } from 'react';
import './App.css';

//Component Loading
import Landing from './pages/Landing';
import Form from './pages/Form.js';
/*
  Traditionally, App.js was a class like we have here. It can carry it's own state, which is pretty helpful. The other type of 'Component' that React can use is a stateless function. It works very differently, cannot have it's own state, and until recently, was not used for complex components. 
  
  React Hooks are basically functions that you can import into any stateless function to give them the abilities that class components have. They can very tricky to learn, especially without a good understanding of what they are replacing.

  We will start off without using React Hooks, but we will bring them in later to see how to use them
*/

import API from './utils/API';


class App extends Component {
  state = {
    showBox: true,
    showLanding: true,
    showForm: false,
    email: '',
    password: ''
  }

  componentDidMount() {
    // This will run when the component loads onto the page
    // Will run everytime the component loads
    // Only class components have access to these types of functions
    // Stateless functions have a hook called UseEffect which does many of those same things
    console.log('App Component has loaded')
  }

  //  Very important that this is an arrow function () => {}
  handleLandingChange = () => {
    this.setState({ showBox: !this.state.showBox })
  }

  handleShowLanding = () => {
    this.setState({ showLanding: !this.state.showLanding })
  }

  handleShowForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  handleStateBoolean = (property) => {
    this.setState(prevState => {
      prevState[property] = !prevState[property];
      return prevState;
    })
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      const sendObj = {
        email: this.state.email,
        password: this.state.password
      }
      API.postLogin(sendObj)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    } else {
      alert('You must fill out the inputs')
    }
  }

  landingToForm = () => {
    this.handleStateBoolean('showLanding');
    this.handleStateBoolean('showForm');
  }

  render() {
    return (
      <div className="App">
        {this.state.showLanding ?
          <Landing
            showBox={this.state.showBox}
            handleLandingChange={this.handleLandingChange}
            landingToForm={this.landingToForm}
          />
          : null}
        {this.state.showForm ?
          <Form
            email={this.state.email}
            password={this.state.password}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            landingToForm={this.landingToForm}
          />
          : null}

      </div >
    );
  }

}





export default App;
