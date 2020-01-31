import React from 'react';
import './form.css'

const Form = (props) => {
  return (
    <div className="container">
      <div className="form-holder">
        <div className="input-form">
          <label htmlFor="email">Email</label>
          <input autoComplete='off' type="text" name="email" value={props.email} onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="input-form">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={props.password} onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="input-form">
          <button type="submit" onClick={(e) => props.handleFormSubmit(e)}>Submit</button>
        </div>
      </div>

      <div className="output-area">
        <p className="output-text">Value of email in App.js:
          <span className='output-value'> {props.email ? props.email : 'Empty String'}</span>
        </p>

        <p className="output-text">Value of password in App.js:
          <span className='output-value'> {props.password ? props.password : 'Empty String'}</span>
        </p>
      </div>

      <div className="description">
        <p>This is called <span className='highlight'>two way binding</span>. By making the value of the input equal to the value of the email/password state in App.js and having a change event on the input changing the value of state for email/password in App.js we make sure that the value is what we expect it to be. </p>

        <p>The submit event takes the values in App.js and sends them to our backend server on a post route we created. For now, all the route does is send back the information to browser and let us know that it is connected successfully. We will make a different form later on that actually interacts with our MongoDB we set up.</p>

        <p>When you come back to this page from the Landing page without refreshing the browser, you will see that the values for email and password are still inside the inputs. This is because we have not set up any type of function to handle what we want to happen when we leave the form component. With a Class Component, you can use the React method of componentWillDismount() to handle those type of clean up events. Since this particular component is a stateless function component, we will have to be a little more creative on what we decide to do. Later on, we will see how React Hooks can take care of this issue inside of stateless functions as well.</p>
      </div>

      <div className="bottom-buttons">
        <button className='page-btn' onClick={props.landingToForm}>Back to Landing Page</button>

      </div>
    </div>
  );
}

export default Form;