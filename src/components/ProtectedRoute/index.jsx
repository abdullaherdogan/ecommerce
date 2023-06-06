import React from 'react'
import {auth} from '../../utils/Auth'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({redirectPath}) => {
  const token = auth.getToken()
  if (!token) {
    return <Navigate to={redirectPath}/>
  }
  return (
    <Outlet/>
  )
}

export default ProtectedRoute