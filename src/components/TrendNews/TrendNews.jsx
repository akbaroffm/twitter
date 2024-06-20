import React from 'react'
import Dot from '../../assets/images/dot.svg'

function TrendNews({title, where, number}) {
  return (
    <div className='mt-[20px] flex items-center justify-between'>
        <div className='flex flex-col gap-[2px]'>
            <span className='text-[15px] font-[400] text-[#85878B] leading-[22px] '>{where}</span>
            <span className='text-[19px] font-[600] text-[#000] leading-[27px]'>{title}</span>
            <span className='text-[15px] font-[400] text-[#85878B] leading-[22px]'>{number}</span>
        </div>
        <div>
            <button>
                <img src={Dot} alt="dot" />
            </button>
        </div>
    </div>
  )
}

export default TrendNews