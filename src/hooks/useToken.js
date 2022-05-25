import React, { useEffect, useState } from 'react'

 const useToken = (user) => {
     console.log(user)
    const [token,setToken] = useState('');
    const email = user?.email;
    const name = user?.displayName;
    useEffect(()=>{
        if(email){
            fetch(`https://infinite-escarpment-22015.herokuapp.com/user/${email}`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({name:name})
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
