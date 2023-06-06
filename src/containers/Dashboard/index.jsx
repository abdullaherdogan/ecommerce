import React from 'react'
import {Route} from 'react-router-dom'
import Layout from '../Layout'
import {Home} from './Home'

const Dashboard = () => {
  return (
   <>
      <Route element={<Layout/>}>
          <Route path='' element={<Home/>} />
      </Route>
   </>
  )
}

export default Dashboard