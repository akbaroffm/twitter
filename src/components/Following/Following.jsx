import React from 'react'

function Following({name, url, username}) {
  return (
    <div>
        <div className='flex items-center'>
            <div className='pr-[10px]'>
                <img className='pr-[13px]' src={url} alt="profile" width={60} height={60}/>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-start justify-between'>
                    <span className='font-[600] text-[17px] text-[#000] leading-[24px]'>{name}</span>
                    <span className='text-[17px] text-[#85878B] leading-[24px] font-[400]'>{username}</span>  
                </div> 
                <div className='pl-[36px]'>
                    <button className='text-white py-[10px] px-[18px] rounded-[50px] bg-[#000] font-[600]'>Follow</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Following