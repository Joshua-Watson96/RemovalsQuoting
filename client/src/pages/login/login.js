import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth'; 
import { Logo } from "../logo/logo"
import "./login.css"

export function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  
  



  return (
    <body className='loginBody'>
      
    <div className="container ">
      
      
      <h1 className='pageTitle'><Logo /></h1>
      <h2> Free house move quote.</h2>
      <h3> Please login or signup.</h3>
    
      <form onSubmit={handleFormSubmit}>
        <div className="emailLogin">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="passwordLogin">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <br/>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="buttons">
          <button type="submit">Log in!</button>
          <h3 className='noAcc'>Don't have an account?</h3>
          <Link to="/signup"><button type="submit">Sign up here!</button></Link>
        </div>
      </form>
    </div>
    </body>
  );
}


