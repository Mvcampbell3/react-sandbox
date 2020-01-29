import React from 'react';
import './form.css'

const Form = (props) => {
  return (
    <div className="container">
      <div className="form-holder">
        <div className="input-form">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={props.email} onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="input-form">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={props.password} onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="input-form">
          <button type="submit" onClick={(e) => props.handleFormSubmit(e)}>Submit</button>
        </div>
        <button onClick={props.landingToForm}>Back to Landing Page</button>
      </div>
    </div>
  );
}

export default Form;