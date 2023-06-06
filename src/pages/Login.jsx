import React from 'react'
import logo from '../assets/images/logo.svg'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-form">
        <div className="header">Giriş Yap</div>
        <div className="text">Email ve Şifre Bilgilerinizi Girerek Giriş Yapın.</div>
        <input type="email" placeholder='Email Adresiniz' />
        <input type="password" placeholder='Şifreniz' />
        <Button title='Giriş Yap' className='btn-primary'/>
        <Link className='text text-primary' to='/register'>
          Hesap Oluştur
        </Link>
      </div>
    </div>
  )
}

export default Login