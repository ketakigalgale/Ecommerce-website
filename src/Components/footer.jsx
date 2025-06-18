import React from 'react'
import { assets } from '../assets/assets'

const footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo3} className='w-60'alt="" />
        <p className='w-full md:w-2/3 text-gray-600 '>
        We’re committed to delivering top-quality products with excellent customer service. Shop with confidence and convenience.
        </p>
        
        </div>

        <div>
<p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
<li>Home</li>
<li>About us</li>
<li>Delivery</li>
<li>Privacy policy</li>
        </ul>
        </div>  
        
        <div>
            <p className='text-xl font-medium mb-5  '>
               GET IN TOUCH 
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
<li>+91 8080634065</li>
<li>ketakigalgale19@gmail.com</li>
            </ul>
        </div>
        </div> 
        <div>
          <hr/> 
           <p className='py-5 text-sm text-center'>Copyright 2025@ Borcelle.com -  All Right Reserved</p>
        </div>
         </div>
  )
}

export default footer