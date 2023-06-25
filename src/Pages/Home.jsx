import React, { useState } from 'react'
import Cards from '../Components/Cards'
import {data} from '../Jobs'

const Home = () => {
  const [show,setShow]  = useState(true)
  const [dataItem,setDataItem] = useState(data.slice(0,4))

  function handleClick(){
    if(show===true){
      setDataItem(() =>data.slice(0,data.length))
    }
    else{
      setDataItem(data.slice(0,4))
    }
    setShow(!show)
   
  }

  return (
    <div>
      <div className='flex justify-between gap-6 w-[90%] px-6 m-auto pt-[50px]'>

        <div className=' bg-slate-900 relative rounded-[10%] w-[450px] h-[270px]'>
          <img className='rounded-[10%] absolute bottom-6 right-3 ' src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>

        <p className=' w-[80%] text-[26px] text-yellow-900 pt-8 '> We focus on <span className='font-bold text-gray-700'>innovation</span > and <span className='font-bold text-gray-700'>customer</span> satisfaction, Tesco World has established itself as a trusted partner for organizations seeking reliable and cutting-edge technology solutions.</p>
      </div><br />

      <h1 className='w-[25%] text-center text-[30px] mt-[20px]'>Recent Openings <hr className='h-[3px] w-[80%] m-auto bg-green-900'/></h1><br />

      <div className='flex flex-wrap w-[95%] m-auto justify-between items-center'>
        {
         dataItem.map((data,index) => <Cards data={data} key={index}/>)
        }
      </div><br />

      <div className='pt-2 flex justify-center'>
        <button onClick={handleClick} className='bg-[#1589ff] w-[10%] text-stone-50 px-2 py-1 rounded-md hover:bg-[#368bc1]'>{show ? 'show more' : 'show less'}...</button>
      </div><br />

      <div >
      <h1 className='w-[18%] text-center text-[30px]'>Important<hr className='h-[2px] w-[75%] m-auto bg-green-900'/></h1><br />
        <p className='w-[90%] m-auto'>Tesco World is a leading global company that specializes in providing comprehensive IT services and business solutions to clients worldwide. In the realm of IT services, Tesco World offers a wide range of expertise to cater to diverse client needs. Their services encompass software development, infrastructure management, cloud computing, cybersecurity, data analytics, and more. The company boasts a team of highly skilled professionals who leverage their technical proficiency to deliver tailored solutions that align with clients' business objectives. </p>
      </div>

      <br /><br />

    </div>
  )
}

export default Home