import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'
const About = () => {
  return (
    <div>
<div className='text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'} text2={'US'}/>

</div>
<div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]'src={assets.about_img} alt="" />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>At Borcelle, we blend modern trends with timeless elegance, offering carefully curated fashion apparel that empowers individuals to express their unique style confidently through high-quality, affordable, and sustainable clothing.</p>
<p>Driven by passion for fashion, Borcelle delivers a seamless shopping experience, prioritizing customer satisfaction, ethical sourcing, and trend-forward designs to make everyday outfits extraordinary and accessible to all fashion lovers.</p>
<b className='text-gray-800'>Our Mission</b>
<p>At Borcelle, our mission is to empower every individual to express their unique style through affordable, high-quality fashion. We are committed to offering a seamless online shopping experience, bringing the latest trends and timeless essentials to your doorstep with love, care, and confidence.

</p>
</div>
</div>
<div className='text-xl py-4 '>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
</div>


 <div className='flex flex-col md:flex-row text-sm mb-20 '>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Quality Assurance:</b>
<p className='text-gray-600'>At Borcelle, quality is our promise. Every product is carefully selected and inspected to meet high standards of fabric, fit, and finish. We ensure that your fashion experience is not only stylish but also reliable and long-lasting.</p>
</div>

<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Convenience:</b>
<p className='text-gray-600'>Shopping at Borcelle is designed to be simple, fast, and stress-free. From user-friendly browsing to secure checkout and quick delivery, we make fashion effortlessly accessible—anytime, anywhere.</p>
</div>

<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Exceptional Customer Service:</b>
<p className='text-gray-600'>At Borcelle, our customers are at the heart of everything we do. Our dedicated support team is here to assist you with quick responses, easy returns, and a smooth shopping experience—because your satisfaction is our top priority.</p>
</div>
</div> 

<NewsletterBox/>
</div>
  
  )
}

export default About