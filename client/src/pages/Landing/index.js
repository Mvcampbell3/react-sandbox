import React from 'react';
import './landing.css'
import propsSrc from '../../images/props.png'

import Box from '../../components/Box';
import Circle from '../../components/Circle';

const Landing = (props) => {
  return (
    <div className="container">
      <div className='intro-box'>
        <h1>This is the Landing Compnent</h1>
        <p>This is a <span className='highlight'>stateless function</span> that is imported into app.js and rendered</p>
        <p>React will only render what is different between what it knows the 'virtual' DOM is now and what the 'virtual' DOM will be</p>
        <p>This makes React work relatively efficently at displaying things to a page</p>
        <p>But if you re-render all of your components everytime you do something with the page, it loses some of its purpose.</p>
      </div>

      <div className="switch-component-box">
        <p>Here is an example of re-rendering only part of the page. We have a button which will flip-fop between two different components that we have loaded into Landing.js. The value that determines which compenent to load will come from App.js state, and be a prop we can access inside of Landing.js by passing it down into Landing.js from App.js.</p>

        <hr/>

        <img className='props-img' src={propsSrc} alt="props diagram" />

        <hr/>

        <p>This is the value of showBox: {props.showBox ? 'True' : 'False'}</p>

        <div className="input-group">
          <p>Switch between Box and Circle Components</p>

          {/* 
            Since we are not using any events or parameters for this OnClick event
            We can call the OnClick event just like this:

            onClick={props.handleLandingChange}

            If we wanted to call this function while trying to use parameters or an event
            We would need to wrap it inside of an arrow function:

            onClick={(made-up-parameter) => props.handleLandingChange(made-up-parameter)}
                        or
            onClick={(e) => props.handleLandingChange(e)}

            A lot of the problems I had learning React came from this
          */}
          <div className="toggle-holder" onClick={props.handleLandingChange}>
            {/* Condiditional styling using the ternary operator, more below */}
            <div className={props.showBox ? 'toggle toggle-box' : 'toggle toggle-circle'}></div>
          </div>
        </div>

        <div className="show-component">
          {/* This is called a ternary conditional operator, this will be used a lot in React  */}
          {props.showBox ? <Box /> : <Circle />}
          {/* 
            If is basically an if statement with an else block:
              if (showBox) {
                <Box />
              } else {
                <Circle />
              }
            
            It is super useful, even outside of React applications
          */}

        </div>

        <div className="explanation">
          <p>This is what is known as <span className='highlight'>conditional rendering</span></p>

          <button className='page-btn' onClick={props.landingToForm}>On to Form Control</button>
        </div>


      </div>

    </div>


  );
}

export default Landing;