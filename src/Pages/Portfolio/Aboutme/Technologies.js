import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaReact,FaNodeJs,FaClipboardList,FaCcStripe } from "react-icons/fa";
import { GiDaisy } from "react-icons/gi";
import { SiMongodb,SiExpress,SiFirebase,SiTailwindcss,SiJsonwebtokens } from "react-icons/si";
import { CgArrowsExchangeAlt } from "react-icons/cg";
export const Technologies = () => {
  return (
    <div>

        <h3 className="text-4xl font-medium my-16">TECHNOLOGIES</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
        
  
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-sky-600"><FaReact></FaReact></div>
    <div class="text-xl font-medium">React</div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl"><AiFillGithub></AiFillGithub></div>
    <div class="text-xl font-medium">Github</div>
  </div>
  
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-green-700"><SiMongodb></SiMongodb></div>
    <div class="text-xl font-medium">MongoDB</div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-sky-600"><FaCcStripe></FaCcStripe></div>
    <div class="text-xl font-medium">Firebase</div>
  </div>
  
  
  
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-green-700"><FaNodeJs></FaNodeJs></div>
    <div class="text-xl font-medium">Node JS</div>
  </div>
  <div class="flex flex-col justify-center items-center ">
    <div class="text-5xl text-pink-600"><FaClipboardList></FaClipboardList></div>
    <div class="text-xl font-medium">React Query</div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-primary"><SiExpress></SiExpress></div>
    <div class="text-xl font-medium">Express JS</div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-yellow-400"><SiFirebase></SiFirebase></div>
    <div class="text-xl font-medium">Firebase</div>
  </div>
  
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-sky-400"><SiTailwindcss></SiTailwindcss></div>
    <div class="text-xl font-medium">Tailwind</div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-sky-400"><SiJsonwebtokens></SiJsonwebtokens></div>
    <div class="text-xl font-medium">JWT</div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-pink-500"><CgArrowsExchangeAlt></CgArrowsExchangeAlt></div>
    <div class="text-xl font-medium">Axios</div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="text-5xl text-yellow-600"><GiDaisy></GiDaisy></div>
    <div class="text-xl font-medium">Daysi UI</div>
  </div>
  
</div>
       
    </div>
  )
}
