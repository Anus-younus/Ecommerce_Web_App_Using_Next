import React from 'react'

const NewsLetter = () => {
    return (
        <div
            style={{ background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)" }}
            className='w-[80%] gap-7 h-[40vh] flex flex-col items-center justify-center m-auto px-0 py-[140px] mb-[150px]'>
            <h1 className='text-[#454545] text-[55px] font-semibold'>Get Exclusive Offers On Your Email</h1>
            <p className='text-[#454545] text-2xl'>Subscribe to Our new Letter and stay updated</p>
            <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-sm border-[#e3e3e3]'>
                <input type="email" placeholder='Your Email Id' className='w-[500px] ml-[30px] border-none outline-none text-[#616161] ' />
                <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white cursor-pointer'>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter