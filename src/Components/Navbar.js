import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='text-center bg-slate-900 py-4'  >
        <Link to='/'>
          <span className='text-stone-100 mx-1 font-bold text-xl'>T</span>
          <span className='text-yellow-400 mx-1 font-bold'>E</span>
          <span className='text-yellow-400 mx-1 font-bold'>S</span>
          <span className='text-yellow-400 mx-1 font-bold'>C</span>
          <span className='text-yellow-400 mx-1 font-bold'>O</span>
          <span className='text-stone-100 mx-1 font-bold text-xl'>W</span>
          <span className='text-yellow-400 mx-1 font-bold'>O</span>
          <span className='text-yellow-400 mx-1 font-bold'>R</span>
          <span className='text-yellow-400 mx-1 font-bold'>L</span>
          <span className='text-stone-100 mx-1 font-bold text-xl'>D</span>
        </Link>
    </div>
  )
}

export default Navbar