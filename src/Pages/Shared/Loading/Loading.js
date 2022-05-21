import React from 'react'

export const Loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <progress className="progress progress-primary w-56"></progress>
    </div>
  )
}
