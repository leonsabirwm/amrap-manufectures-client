import React, { useEffect, useState } from 'react'

 const useToken = (user) => {
    const [token,setToken] = useState('');
    const email = user?.email;
    console.log(user)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/@${email}`,{
            method:"PUT"
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('access-token',data.token);
            setToken(data.token);
        })
        }
    },[user]);
  return [token];
}

export default useToken;
