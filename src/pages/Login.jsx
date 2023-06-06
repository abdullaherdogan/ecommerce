import React, {useState} from 'react'
import logo from '../assets/images/logo.svg'
import Button from '../components/Button'
import {Link, useNavigate} from 'react-router-dom'
import {useRequest} from '../hooks/UseRequest'
const Login = () => {
  const [login] = useRequest()
  const [loginForm, setLoginForm] = useState({username:'',password:''})
  const navigate = useNavigate()
  const onChange = (e) => {
    setLoginForm(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = () => {
    login('auth/login',{
      method:'POST',
      data:JSON.stringify(loginForm)
    }).then(res => {
      localStorage.setItem('auth',JSON.stringify(res.data))
      navigate('/dashboard')
    })
  }
  return (
    <div className='login'>
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-form">
        <div className="header">Sign In</div>
        <div className="text">Sign in with your email address and password</div>
        <input onChange={onChange} type="text" name='username' placeholder='Email Address' />
        <input onChange={onChange} type="password" name='password' placeholder='Password' />
        <Button title='Sign in' onClick={handleSubmit} className='btn-primary'/>
        <Link className='text text-primary' to='/register'>
        Create Account
        </Link>
      </div>
    </div>
  )
}

export default Login