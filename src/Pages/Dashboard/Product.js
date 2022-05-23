import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const Product = ({product,refetch,index}) => {
    const {_id,name,available,price,image} = product;

    const handleDelete=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/parts/${_id}`)
                .then((response) => {
                    console.log(response);
                    
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                      )
                    
                  }, (error) => {
                    console.log(error);
                  });
              
            }
          })


       
    }
  return (
    <>
    <tr>
    <td className='capitalize font-medium'>{index + 1}</td>
    <td className='capitalize font-medium'>{name}</td>
    <td>
    <div className="avatar">
  <div className="w-8 rounded">
    <img src={image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
    </td>
        <td className=' font-medium'>{price}</td>
        <td className=' font-medium'>{available}</td>
        <td>
            <button className='btn btn-xs bg-red-500 border-0 text-white' onClick={handleDelete}>Delete</button>
            </td>
    </tr>

    </>
  )
}
