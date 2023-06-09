import React from 'react'
import logo from '../../assets/images/logo.svg'
import { NavLink, useNavigate} from 'react-router-dom'
import Button from '../../components/Button'
const Sidebar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('auth')
        navigate('/login')
    }
  return (
    <aside className='sidebar'>
        <div className="sidebar-top">
            <img src={logo} className='sidebar-top-logo' alt="Logo" />
            <div className="sidebar-top-menu">
                <NavLink to='/dashboard/products' className={({isActive}) => `sidebar-top-menu-item ${isActive ? 'active' : ''}`}>Products</NavLink>
                <NavLink to='/dashboard/basket' className={({isActive}) => `sidebar-top-menu-item ${isActive ? 'active' : ''}`}>Orders</NavLink>
            </div>
        </div>
        <div className="sidebar-bottom">
            <div>
                <div className="text">Abdullah</div>
                <div className="text text-primary">Erdogan</div>
            </div>
            <Button className='btn-white' title='Çıkış Yap' onClick={logout} />
        </div>
    </aside>
  )
}

export default Sidebar