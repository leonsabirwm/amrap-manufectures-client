import React, { useState } from 'react'
import { User } from './User'
import { useQuery } from 'react-query';
import axios from 'axios';

export const MakeAdmin = () => {
    // const [users,setUsers] = useState([]);
    

    const {data:users,isLoading,refetch} = useQuery('my-users',()=>axios.get("http://localhost:5000/users"))
  return (
    <div>
        <div>
       <div className="overflow-x-auto">
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
