import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRouting({children}) {
    const token = localStorage.getItem('token');
    
  return (
    <div>
      {token ? children : <Navigate to='/login' replace/>}
    </div>
  )
}

export default ProtectedRouting
