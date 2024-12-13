import Link from 'next/link'
import React from 'react'

type AuthFormType = {
  signup?: boolean
}

const AuthForm = ({signup}:AuthFormType) => {
  return (
    <div className='w-full h-[130vh] bg-[#fce3fe] pt-[100px] mb-5'>
      <div className="w-[670px] h-[640px] m-auto bg-white py-[40px] px-[60px]">
        <h1 className='my-[20px] mx-0 text-2xl font-bold'>Sign Up</h1>
        <div className="flex flex-col gap-7 mt-7">
          {signup && <input className='h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' type="text" placeholder='Your Name' />}
          <input className='h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' type="email" placeholder='Email Address' />
          <input className='h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' type="password" placeholder='Password' />
        </div>
        <button className='w-[550px] h-[72px] text-white bg-[#ff4343] mt-7 text-2xl border-none font-medium cursor-pointer'>Continue</button>
        <p className='mt-[20px] text-[#5c5c5c] text-lg font-medium'>{signup ? "Already have an account": "Dont have an account"} <Link href={signup ? "/login": "/signup"} className='text-[#ff4141] font-semibold'>{signup ? "Login here": "Signup here"}</Link></p>
        <div className="flex items-center mt-[25px] gap-5 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" name='' id='' />
          <p>By continuing i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default AuthForm