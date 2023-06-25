import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='text-center bg-slate-700 text-white py-4'>
      <div className='flex items-center justify-center gap-7 '>
        <span>{<BsInstagram />}</span>
        <span>{<BsFacebook />}</span>
        <span>{<BsTwitter />}</span>
        <span>{<BsGithub />}</span>
        <span>{<BsLinkedin />}</span>
      </div>
      <p className='mt-3'>Copyright@2023 All rights reserved</p>
      <br />
      <p className='text-sm w-[70%] m-auto font-thin'>Tesco World stands as a trusted partner for organizations seeking to leverage technology to drive their business success, offering a comprehensive suite of IT services and business solutions backed by expertise, innovation, and a customer-centric approach.</p>
    </div>
  )
}

export default Footer