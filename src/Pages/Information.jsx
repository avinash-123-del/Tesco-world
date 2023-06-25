import React from 'react'

const Information = () => {
  return (
    <div className='information'>
      <h1 >About Tesco World</h1><hr className='h-1 bg-orange-600 shadow-2xl w-[25%]'/>
      <p>
        Tesco World is a leading global provider of comprehensive IT services and business solutions. We specialize in delivering innovative technology solutions that empower organizations to thrive in the digital era.
      </p>
      <br />
      <h2 >Our Services</h2>
      <p>
        At Tesco World, we offer a wide range of IT services tailored to meet the unique needs of our clients. Our services include:
      </p>
      <ul className='information_ul'>
        <li>Software Development</li>
        <li>Infrastructure Management</li>
        <li>Cloud Computing</li>
        <li>Cybersecurity</li>
        <li>Data Analytics</li>
      </ul>
      <br />
      <h2 >Our Approach</h2>
      <p>
        We believe in delivering exceptional value to our clients through a customer-centric approach. Our team of highly skilled professionals works closely with clients to understand their business objectives and provide customized solutions that drive growth and efficiency.
      </p>
      <br />
      <h2 className=''>Our Expertise</h2>
      <p>
        With years of experience and a deep understanding of the latest technologies, our team is equipped to tackle complex IT challenges across various industries. We have successfully served clients in sectors such as finance, healthcare, e-commerce, and more.
      </p>
      <br />
    </div>
  )
}

export default Information