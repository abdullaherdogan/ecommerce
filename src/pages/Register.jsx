import React from 'react'
import logo from '../assets/images/logo.svg'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className='login'>
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-form">
        <div className="header">Sign Up</div>
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Create Password' />
        <input type="password" placeholder='Confirm Password' />
        <Button title='Sign Up' className='btn-primary'/>
        <div className="text">Already have an account?? <Link className='text text-primary' to='/login'>
          Sign In
        </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Register