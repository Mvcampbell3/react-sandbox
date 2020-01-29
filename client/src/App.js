import React, { Component } from 'react';
import './App.css';
import API from './utils/API'

function App() {
  return (
    <div className="App">
      <h1>This is the App component</h1>
      <p>There are some very important things to realize when dealing with React</p>
      <Landing></Landing>
    </div>
  );
}

class Landing extends Component {
  state = {
    ok: false
  }

  componentDidMount() {
    console.log('componenet mounted');
    API.testGet()
      .then(results => console.log(results))
      .catch(err => console.log(err)) 
  }

  render() {
    return (
      <h1>This is the Landing Component</h1>
    );
  }
}


export default App;
