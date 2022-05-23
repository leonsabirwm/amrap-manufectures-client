import React from 'react'
import { Link } from 'react-router-dom';


export const MyWorks = () => {
  return (
      <div className='my-16'>
      <h1 className='text-3xl font-medium'>MY WORKS</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-16 lg:mx-16'>
        <div >
        <a href='https://kungfu-ip.web.app/'  rel="noreferrer" target='_blank'>
        <div className="card w-96 bg-base-100 shadow-xl h-full hover:bg-red-500/40">
        <figure><img src="https://i.ibb.co/sbm3Cp4/kung-ip.png"  alt="kung-ip" border="0" /></figure>
        <div className="card-body">
            <h2 className="card-title">Kungfu IP</h2>
        </div>
        </div>
        </a>
        </div>
        <div>
        <a href='https://lucid-review.netlify.app/'  rel="noreferrer" target='_blank'>

        <div className="card w-96 bg-base-100 shadow-xl h-full hover:bg-sky-600/40">
        <figure><img src="https://i.ibb.co/9qVKt2K/lucid-review.png" alt="lucid-review" border="0" /></figure>
        <div className="card-body">
            <h2 className="card-title">Lucid Review</h2>
        </div>
        </div>
        </a>
        </div>
        <div>
        <a href='https://warriors-arsenal.web.app/'  rel="noreferrer" target='_blank'>
        <div className="card w-96 bg-base-100 shadow-xl h-full hover:bg-slate-600/40">
        <figure><img src="https://i.ibb.co/ncJb9XF/warrior-arsenal.png" alt="warrior-arsenal" border="0" /></figure>
        <div className="card-body">
            <h2 className="card-title">Warrior's Arsenal</h2>
        </div>
        </div>
        </a>
        </div>


    </div>
    </div>
  )
}
