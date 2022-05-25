import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

export const User = ({user,refetch}) => {
    const {name,email,role} = user
    const handleMakeAdmin = ()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: `Appoint ${name.toUpperCase()} as Admin`,
            icon: 'question',
            color:'#4099e3',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Admin',
           
          }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`https://infinite-escarpment-22015.herokuapp.com/user/admin/${email}`)

                .then((response) => {
                    refetch()
                    Swal.fire(
                        'Appointed!',
                        `${name} has been appointed as Admin`,
                        'success'
                      )
                    
                }, (error) => {
                    console.log(error);
                    toast.error("Something went wrong!!")
                });
              
            }
          })
        
    }
  return (
    <>
    <tr>
        <td className='capitalize font-medium'>{name}</td>
        <td className=' font-medium'>{email}</td>
        <td className='capitalize font-medium'>{role?role:"user"}</td>
        <td>{
            role==="admin"?" ":<button className='btn btn-xs btn-primary' onClick={handleMakeAdmin}>Appoint</button>
            }</td>
    </tr>

    </>
  )
}
