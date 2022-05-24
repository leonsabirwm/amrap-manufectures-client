import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { Loading } from '../Loading/Loading';
import { useAdmin } from './../../../hooks/useAdmin';

export const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    // const [admin] = useAdmin();
    // const admin = localStorage.getItem('role')
    // console.log(admin);
    let location = useLocation();
    // useEffect(()=>{
    //     if (admin || !user) {
    //         console.log('inside',admin  )
    //         signOut(auth);
    //         // localStorage.removeItem('access-token')
            
    //     }
    // },[admin]);
    
    if(loading){
        return <Loading></Loading>
    }
    return children;
}
