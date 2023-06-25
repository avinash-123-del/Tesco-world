import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Page from './Page'
const Body = () => {

  const [activeItem, setActiveItem] = useState('home');
  const handleClick = (item) => {
    setActiveItem(item);
    console.log('click :',item);
  };
  console.log('reload',activeItem);
  
  return (
    <div className='flex'>
        <section className='body_left_section'>
            <Link to='/'><li className={activeItem==='home' ? 'body_li_on' : 'body_li_off' }  onClick={() => handleClick('home')}>Home</li></Link>
            <Link to='/contact' className={activeItem==='contact' ? 'body_li_on' : 'body_li_off' } onClick={() => handleClick('contact')}><li  >Contact</li></Link>
            <Link to='/information' className={activeItem==='information' ? 'body_li_on' : 'body_li_off' } onClick={() => handleClick('information')}><li  >Information</li></Link>
            <Link to='/guide' className={activeItem==='guide' ? 'body_li_on' : 'body_li_off' } onClick={() => handleClick('guide')}><li >Guide</li></Link>
        </section>
        <section className='w-[100%] m-auto'>
            <Page />
        </section>
    </div>
  )
}

export default Body

