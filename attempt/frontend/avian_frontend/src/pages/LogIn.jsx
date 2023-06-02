import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LogIn({user, setUser}) {
  let navigate = useNavigate();

  const submitLoginForm = function(event){
    event.preventDefault()
    console.log(event.target[0].value)
    axios.post('/login', {email: event.target[0].value, password: event.target[1].value}).then((response)=>{
      console.log('response from server: ', response)
      if(response.data.success === false){
        alert('Invalid - Please try again, or Sign Up!')
      }
      else if(response.data.success === true)
        navigate("/", { replace: true });
        window.location.reload()
    })
  }

  return (
    <div className="signup-content">
      <div className="signup-container">
          <h1>Log In</h1>
          <form id='login-form' onSubmit={submitLoginForm}>
            <label id='sign' for="email">email</label>
            <input type='text' name="email" id="email"></input>
            <hr></hr>
            <label id='sign' for="password">password</label>
            <input type='password' name="password" id="password"></input>
            <hr></hr>
            <button type="submit">Log In</button>
            <a href="/#/signup">Need an account?</a>
          </form>
        </div>
    </div>
  )
}

export default LogIn