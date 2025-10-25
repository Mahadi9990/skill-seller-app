import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation()
    if(loading){
       return <Loading/>
    }
    if(user && user?.email){
        return children;
    }else{
       return <Navigate state={location.pathname} to='/auth/login'/>
    }
};

export default PrivateRoute;