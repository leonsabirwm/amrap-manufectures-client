import axios from 'axios';
import React from 'react'

export const useAdmin = () => {
  const [user, loading, error] = useAuthState(auth);
    const [admin,setAdmin] = useState(false);
   const email = user.email;
   if(email){
       axios.get()
   }
  return (
    <div>useAdmin</div>
  )
}
