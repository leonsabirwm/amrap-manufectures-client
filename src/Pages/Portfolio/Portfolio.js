import React from 'react'
import { Aboutme } from './Aboutme/Aboutme'
import { Education } from './Aboutme/Education'
import { Technologies } from './Aboutme/Technologies'
import { MyWorks } from './MyWorks'

export const Portfolio = () => {
    
  return (
    <div>
        <Aboutme></Aboutme>

        <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>
            <div className='order-2'>
                <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1653250436~exp=1653251036~hmac=c376e08bb6639a3b9fbe8fca2ddd852b41a30fb85b9086c706f73a55a0c0ac69" alt="" />
            </div>
            <div className='flex flex-col justify-center items-left px-16 font-medium bg-gray-800/[.8] py-12'>
                <h2 className="text-5xl text-white text-left">A bolt-on developer to create your next project</h2>
                <div className='text-left my-4'>
                    <button onClick={()=> window.scrollTo({top:0,behavior:"smooth"})} className='btn btn-outline btn-primary '>My Works</button>
                </div>
            </div>
        </div>
        <Education></Education>
        <MyWorks></MyWorks>
        <Technologies></Technologies>
    </div>
  )
}
