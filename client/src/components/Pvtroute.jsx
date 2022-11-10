import React from 'react'
import { Navigate } from 'react-router-dom'

const Pvtroute = ({children}) => {
   
    let pvtroute =JSON.parse(localStorage.getItem("token")) || []
  
    let auth = pvtroute.email
    if(auth){
        return children
    }
  return <Navigate to="/"/>


}

export default Pvtroute
