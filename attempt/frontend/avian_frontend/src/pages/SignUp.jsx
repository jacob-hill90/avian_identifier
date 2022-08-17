import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {

  let navigate = useNavigate();

  const submitLoginForm = function(event){
    event.preventDefault()
    console.log(event.target[0].value)
    axios.post('/login', {email: event.target[0].value, password: event.target[1].value}).then((response)=>{
      console.log('response from server: ', response)
      window.location.reload()
    })
  }

  const submitSignupForm = function(event){
    event.preventDefault()
    axios.post('/signup', {email: event.target[0].value, password: event.target[1].value}).then((response)=>{
      console.log('response from server: ', response)
      if(response.data.success === false){
        alert('Please Try Again')
      }
      else if(response.data.success === true){
        submitLoginForm(event)
        navigate("/", { replace: true });
      }
    })
  }

  return (
    <div className="signup-content">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form id='signup-form' onSubmit={submitSignupForm}>
          <label for="email">email</label>
          <input type='text' name="email" id="email"></input>
          <hr></hr>
          <label for="password">password</label>
          <input type='password' name="password" id="password"></input>
          <hr></hr>
          <button type="submit">Sign Up</button>
          <a href="/#/login">Already have an account?</a>
        </form>
      </div>
    </div>
  )
}

export default SignUp