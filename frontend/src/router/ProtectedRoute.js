import React from 'react'
import { Navigate } from 'react-router-dom';
import Login from '../components/Login';

const ProtectedRoute = (props) => {

   if(!Login) return <Navigate to="/login"/>;
   return props.children;
}

export default ProtectedRoute
