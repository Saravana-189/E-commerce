import React from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsingup'>
        <div className="container">
          <h1>Sign Up</h1>
          <div className="field">
            <input type='text' placeholder='Enter Your Name'/>
            <input type='email' placeholder='Enter Your Email'/>
            <input type='password' placeholder='Enter Your Password'/>
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
          <div className="agree">
            <input type='checkbox' name='' id=''/>
            <p>By continuing I agree to the terms and conditions</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup