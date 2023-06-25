import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Information from '../Pages/Information'
import Guide from '../Pages/Guide'

const Page = () => {
  return (
    <div className='bg-slate-100 pt-[30px] '>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/information' element={<Information/>}/>
        <Route path='/guide' element={<Guide/>}/>
       </Routes>
    </div>
  )
}

export default Page