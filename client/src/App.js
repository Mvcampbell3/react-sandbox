import React, { Component } from 'react';
import './App.css';

//Component Loading
import Landing from './pages/Landing';
/*
  Traditionally, App.js was a class like we have here. It can carry it's own state, which is pretty helpful. The other type of 'Component' that React can use is a stateless function. It works very differently, cannot have it's own state, and until recently, was not used for complex components. 
  
  React Hooks are basically functions that you can import into any stateless function to give them the abilities that class components have. They can very tricky to learn, especially without a good understanding of what they are replacing.

  We will start off without using React Hooks, but we will bring them in later to see how to use them
*/


class App extends Component {
  state = {
    showBox: true
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
    console.log('switching showBox')
    this.setState({ showBox: !this.state.showBox })
  }

  render() {
    return (
      <div className="App">

        <Landing showBox={this.state.showBox} handleLandingChange={this.handleLandingChange}></Landing>

      </div >
    );
  }

}





export default App;
