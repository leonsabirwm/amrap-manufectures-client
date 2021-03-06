import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Part } from '../Part/Part'
import './Parts.css'

export const Parts = () => {
    const[parts,setParts] = useState([]);
    useEffect(()=>{
        axios.get('https://infinite-escarpment-22015.herokuapp.com/parts')
        .then((response) => {
            console.log(response);
            setParts(response.data.reverse())
          }, (error) => {
            console.log(error);
          });
    },[])
    
  return (
    <div>
        <div className='inline-block'>
        <h3 className="text-4xl font-medium my-12 parts-title pl-2">Parts</h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mx-16'>
           {
               parts.slice(0,6)?.map(part => <Part key={part._id} part={part}></Part>)
           }

        </div>
    </div>
  )
}
