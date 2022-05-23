import React from 'react'
import { GiSchoolBag } from "react-icons/gi";
import { FaSchool,FaUniversity } from "react-icons/fa";

export const Education = () => {
  return (
      <div>
          <h1 className='text-3xl font-medium'>Eduction</h1>
    <div className='grid grid-cols-1 gap-12  lg:grid-cols-3 lg:mx-16 my-12'>
        <div>
           
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
      <div className='flex justify-center'>
      <h2 className='text-5xl text-center ring rounded-full p-4'><GiSchoolBag></GiSchoolBag></h2>

      </div>
    <h2 className="card-title  ">
      
     School
    </h2>
    <p className='text-left'>Went Secondary School learnt some stuff about science and after two years they gave me a certificate saying,"Hey!you have passed SSC.</p>
   
  </div>
</div>

        </div>
        <div>
        <div className="card w-96 bg-base-100 shadow-xl h-full">
  <div className="card-body">
      <div className='flex justify-center'>
      <h2 className='text-5xl text-center ring rounded-full p-4'><FaSchool></FaSchool></h2>

      </div>
    <h2 className="card-title  ">
      
    College
    </h2>
    <p className='text-left'>Yeah!!I am certified as a Higher Secondary Graduate.Here I left Science and explored some business stuffs.</p>
   
  </div>
</div>
        </div>
        <div>
        <div className="card w-96 bg-base-100 shadow-xl h-full">
  <div className="card-body">
      <div className='flex justify-center'>
      <h2 className='text-5xl text-center ring rounded-full p-4'><FaUniversity></FaUniversity></h2>

      </div>
    <h2 className="card-title  ">
      
     University
    </h2>
    <p className='text-left'>Just applied for a seat.Let's see what happens.</p>
   
  </div>
</div>
        </div>
    </div>
    </div>
  )
}
