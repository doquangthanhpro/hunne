import React from 'react'

function Header({author , job , email , phoneNumber , address}) {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="dau text-center">
      <div className="img">
         <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/eaf6e5daa8a7286785abb28fc52ee801~c5_100x100.jpeg?x-expires=1673053200&x-signature=5TZUGo41zKdmsg91rWe0oC%2F9%2F0M%3D' alt='er'/> 
      </div>
      <div className='text1'>
          <text className='  text-center font-bold  '>
              <h1 className='text-center font-bold'>{author}</h1>
              <h4 className=' text-gray-400 rounded-lg font-bold'>{job}</h4>     
          </text>
      </div>

    </div>
     <div className='info'>
          <i className="fa fa-cloud"></i>
          <a href="#/">{email}</a>
          <i className="fa fa-heart"></i>
          <a href="#/">{phoneNumber}</a>
          <i className="fa fa-car"></i>
          <a href="#/">{address}</a>
      </div>
    </div>
  )
}

export default Header
