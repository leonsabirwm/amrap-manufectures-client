import { data } from 'autoprefixer'
import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { ReviewCard } from './ReviewCard';

export const Reviews = () => {
  const  {data:reviews} = useQuery('reviews',()=>axios.get('https://infinite-escarpment-22015.herokuapp.com/reviews'))
  return (
      <div className='pb-16 py-12 bg-base-200 my-16 p-12'>
           <div>
            <h3 className="text-4xl mb-8 text-left font-medium p-8">OUR Testimonials</h3>
        </div>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-8'>

       {
           reviews?.data.map((review,index) => <ReviewCard key={index} review={review}></ReviewCard>)
       }
       </div>
    </div>
  )
}
