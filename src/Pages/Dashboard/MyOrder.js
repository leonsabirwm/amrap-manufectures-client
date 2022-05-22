import React from 'react'

export const MyOrder = ({order,index}) => {
    const {product,quantity,totalCost,payment,image} = order;
  return (
    <>
        <tr>
        <th>{index+1}</th>
        <th><div class="avatar">
  <div class="w-8 rounded">
    <img src={image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div></th>
        <td>{product}</td>
        <td>{quantity}</td>
        <td>{totalCost}</td>
        <td>{
            !payment?<button className='btn btn-xs btn-primary'>Pay</button>:''
            }</td>
      </tr>
    </>
  )
}
