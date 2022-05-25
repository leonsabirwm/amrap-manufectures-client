import React, { useState } from 'react'
import { User } from './User'
import { useQuery } from 'react-query';
import axios from 'axios';

export const MakeAdmin = () => {
    // const [users,setUsers] = useState([]);
    

    const {data:users,isLoading,refetch} = useQuery('my-users',()=>axios.get("https://infinite-escarpment-22015.herokuapp.com/users"))
  return (
    <div>
       <div className="overflow-x-auto scale-75 lg:scale-90">
        <div>
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      
          {
              users?.data.map((user,index) =><User refetch={refetch} key={index} user={user}></User>)
          }
      
     
    </tbody>
  </table>
</div>
    </div>
    </div>
  )
}
