import React from 'react'
import Slider from "react-slick";

export const Carosuel = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
      const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      };
  return (
        <Slider {...settings}>
      <div className=''>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex justify-center items-center'>
          <img className='' src="https://img.freepik.com/free-vector/loading-workman-carrying-boxes_74855-14096.jpg?size=626&ext=jpg&uid=R71728637&ga=GA1.2.1617678331.1651665780" alt="" />
          </div>
          <div className=' flex items-left justify-center  flex-col text-left px-16'>
                <h1 className='text-3xl lg:text-5xl '>Fastest Transportation Service</h1>
                <p className='my-4'>
                It's essential for any business to be able to procure materials, take them to a production location, and distribute their final goods. Transportation connects companies to suppliers and customers, creating an important framework that allows supply to meet personal and professional demands
                </p>
                <button className='btn btn-outline btn-primary w-36'>Place Order</button>
          </div>
          </div>
      </div>
     
     
      <div className=''>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex justify-center items-center'>
          <img className='' src="https://img.freepik.com/free-vector/storehouse-workers-keeping-records-boxes_74855-11065.jpg?t=st=1653551777~exp=1653552377~hmac=359258c8408910f9e20a471591bf085d3466dbb2f1bebb973e371c25994ad9b3&w=740"  alt="" />
          </div>
          <div className=' flex items-left justify-center  flex-col text-left px-16'>
                <h1 className='text-3xl lg:text-5xl '>Precisely Maintained Purchases Records</h1>
                <p className='my-4'>
                Every business must keep records for as long as required by the law. It is important to do so as HMRC may request to see past records if there is any issue regarding your tax. The minimum period for which you must keep records is six years for VAT or five years from the latest date for filing your tax return.
                </p>
                <button className='btn btn-outline btn-primary w-36'>My Purchases</button>
          </div>
          </div>
      </div>
     
     
      <div className=' mt-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex justify-center items-center'>
          <img className='' src="https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration-software-development-team-member-agile-workflow-devops-team-model-it-teamwork-project-management-integrated-practice-abstract-metaphor_335657-2299.jpg?size=338&ext=jpg&uid=R71728637&ga=GA1.2.1617678331.1651665780" alt="" />
          </div>
          <div className=' flex items-left justify-center  flex-col text-left px-16'>
                <h1 className='text-3xl lg:text-5xl '>APP Based Order and Payment
                & Coms.</h1>
                <p className='my-4'>
                The business services examined in this study include software and information services, R&D and technical services, advertising and marketing, business consulting, recruitment and human resource development services. 
                </p>
                <button className='btn btn-outline btn-primary w-36'>Place Order</button>
          </div>
          </div>
      </div>
     
     
      
    </Slider>

    
  )
}
