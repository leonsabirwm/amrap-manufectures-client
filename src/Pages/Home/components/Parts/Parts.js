import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Loading } from '../../../Shared/Loading/Loading'
import { Part } from '../Part/Part'

export const Parts = () => {
    const {data:parts,isLoading} = useQuery('parts',()=>{
      return  axios.get('http://localhost:5000/parts');
    })
    if(isLoading){
        <Loading></Loading>
    }
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mx-16'>
           {
               parts?.data.map(part => <Part key={part._id} part={part}></Part>)
           }

        </div>
    </div>
  )
}
