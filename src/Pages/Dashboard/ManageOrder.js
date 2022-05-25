import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const ManageOrder = ({order,index,refetch}) => {
    const {_id,product,quantity,totalCost,payment,image,shipped} = order;
    const navigate = useNavigate();
    const handleProceed = (id)=>{
        axios.patch(`https://infinite-escarpment-22015.herokuapp.com/order/proceed/${id}`)
        .then((response) => {
            console.log(response);
           if(response.data.acknowledged){
            refetch();
            Swal.fire(
                'Added!',
                'Product has been addeded to shipping queue.',
                'success'
              )
           }
            
          }, (error) => {
            console.log(error);
          });
    }
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
                axios.delete(`https://infinite-escarpment-22015.herokuapp.com/orders/${id}`)
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
        <td>{
        payment?
        <p className='text-green-500 font-medium'>Paid</p>
        :
        <p className='text-red-500 font-medium'>Unpaid</p>

        
    }</td>
        <td>
        {!shipped?
         <p className='text-primary font-medium'>Pending</p>
         :
         <p className='text-green-500 font-medium'>Shipped</p>
}
        </td>
        <td>{
            !payment?
            <div className='flex justify-center items-center'>

             <button className='btn ml-2 text-white border-0 btn-xs bg-red-500' onClick={()=>handleDelete(_id)}>Delete</button>
            </div>:<div className='flex justify-center items-center'>
            
             {
                 shipped?'':<button className='btn ml-2 text-white border-0 btn-xs bg-green-500' onClick={()=>handleProceed(_id)}>Proceed</button>
             }
            </div>
            
            
            
            }
        
        </td>
      </tr>
    </>
  )
}
