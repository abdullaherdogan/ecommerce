import React from 'react'
import logo from '../assets/images/logo.svg'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className='login'>
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-form">
        <div className="header">Kayıt Ol</div>
        <div className="text">Gerekli Bilgileri Doldurarak Kayıt Olun.</div>
        <input type="email" placeholder='Email Adresiniz' />
        <input type="password" placeholder='Şifreniz' />
        <Button title='Kayıt Ol' className='btn-primary'/>
        <div className="text">Zaten bir hesabınız var mı? <Link className='text text-primary' to='/login'>
          Giriş Yap
        </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Register