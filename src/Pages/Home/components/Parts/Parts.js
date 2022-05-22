import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Part } from '../Part/Part'

export const Parts = () => {
    const[parts,setParts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/parts')
        .then((response) => {
            console.log(response);
            setParts(response.data.reverse())
          }, (error) => {
            console.log(error);
          });
    },[])
    
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mx-16'>
           {
               parts?.map(part => <Part key={part._id} part={part}></Part>)
           }

        </div>
    </div>
  )
}
