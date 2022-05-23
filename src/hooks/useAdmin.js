import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

export const useAdmin = () => {
  const [user] = useAuthState(auth);
    const [admin,setAdmin] = useState(false);
   const email = user?.email;
   useEffect(()=>{
    if(email){
        fetch(`http://localhost:5000/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
            console.log(data);
         })
        
    }
   },[user]);
  return [admin];
}
