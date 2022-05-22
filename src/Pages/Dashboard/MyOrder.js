import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';

export const MyOrder = ({order,index,refetch}) => {
    const {_id,product,quantity,totalCost,payment,image} = order;
    const handleDelete=(id)=>{
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
                axios.delete(`http://localhost:5000/orders/${id}`)
                .then((response) => {
                    console.log(response);
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
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
        <th>{index+1}</th>
        <th><div className="avatar">
  <div className="w-8 rounded">
    <img src={image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div></th>
        <td>{product}</td>
        <td>{quantity}</td>
        <td>{totalCost}</td>
        <td>{
            !payment?
            <div>
            <button className='btn btn-xs btn-primary'>Pay</button>
             <button className='btn ml-2 text-white border-0 btn-xs bg-red-500' onClick={()=>handleDelete(_id)}>Delete</button>
            </div>:''
            }
        
        </td>
      </tr>
    </>
  )
}
