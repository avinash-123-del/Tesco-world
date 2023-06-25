import React, { useState } from 'react'

const Contact = () => {
  const [display, setDisplay] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setDisplay('Thankyou for contacting us..')
  }

  return (
    <div className='w-[50%] h-[78vh] m-auto contact'>

      <form action="" className='flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor="">Name </label>
        <input type="text" placeholder='Enter full name' />

        <label htmlFor="">Email </label>
        <input type="email" required name="email" placeholder='emailaddress@gamil.com' />

        <label htmlFor="">Message </label>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <button>Send</button>

        <span>{display}</span>
      </form>
    </div>
  )
}

export default Contact