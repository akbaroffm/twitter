import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import ProfileImg from '../../images/headerimg.png'
import Arrow from '../../images/arrow.svg'
import Avatar from '../../images/profile.svg'
import LocationIcon from '../../images/location.svg'
import LinkIcon from '../../images/link.svg'
import BirthdayIcon from '../../images/born.svg'
import DataIcon from '../../images/data.svg'

function Profile({setSearchState}) {
  const [activeLink, setActiveLink] = useState("Tweets")

  useEffect(() =>{
    setSearchState(true)
  })
  return (
    <div className='h-[100vh] overflow-y-auto pb-[20px]'>
      <div className='pb-[22px] px-[20px] flex items-center space-x-[30px]'>
        <button>
          <img src={Arrow} alt="arrow" width={25}/>
        </button>
          <div className='flex flex-col'>
            <span className='text-[20px] font-[700] leading-[26px] text-[#000]'>Bobur</span>
            <p className='text-[16px] leading-[21px] text-[#000] opacity-60'>1,070 Tweets</p>
          </div>
      </div>
      <img src={ProfileImg} width={'100%'} alt="hero" />
      <div className='flex items-center justify-between px-5'>
        <img className='-mt-[75px]' src={Avatar} alt="avatar" />
        <button className='w-[120px] py-[10px] rounded-[50px] border-[1px] border-slate-300 text-[#000] font-[600]'>Edit profile</button>
      </div>
      <div className='mt-[10px] px-[25px]'>
        <h2 className='text-[24px] text-[#000] font-[700] leading-[32px]'>Bobur</h2>
        <p className='text-[16px] text-[#000] font-[400] opacity-60'>@bobur_mavlonov</p>
        <p className='pt-[15px] font-[400] text-[18px] leading-[24px] '>UX&UI designer at <Link to={'/'} className='text-[#1DA1F2]'>@abutechuz</Link></p>
        <div className='flex items-center justify-between mt-[15px]'>
          <Link to={'/'} className='flex items-center space-x-[5px]'>
            <img src={LocationIcon} alt="location" width={16}/>
            <span className='text-[14px] text-[#000] font-[400] opacity-60'>Mashag'daman</span>
          </Link>
          <Link to={'/'} className='flex items-center space-x-[5px]'>
            <img src={LinkIcon} alt="link" width={16}/>
            <span className='text-[14px] text-[#1DA1F2] font-[400] '>t.me/boburjon_mavlonov</span>
          </Link>
          <Link to={'/'} className='flex items-center space-x-[5px]'>
            <img src={BirthdayIcon} alt="birth" width={16}/>
            <span className='text-[14px] text-[#000] font-[400] opacity-60'>Born November 24, 2000</span>
          </Link>
          <Link to={'/'} className='flex items-center space-x-[5px]'>
            <img src={DataIcon} alt="data" width={16}/>
            <span className='text-[14px] text-[#000] font-[400] opacity-60'>Joined May 2020</span>
          </Link>
        </div>
        <div className='flex items-center space-x-[30px] mt-[15px]'>
          <p>
            <strong className='font-bold'>67 </strong> Following
          </p>
          <p>
            <strong className='font-bold'>47 </strong> Followers
          </p>
        </div>
      </div>
      <div className='mt-[40px] flex items-center justify-between px-[25px]'>
        <Link to={''} onClick={() => setActiveLink("Tweets")} className={`${activeLink == "Tweets" ? "text-[18px] text-[#000} font-bold border-[#1DA1F2]" : 'text-[18px] text-[#000] border-transparent'} border-b-[3px] rounded-t-[4px]`}>Tweets</Link>
        <Link to={'tweets-replies'} onClick={() => setActiveLink("Tweets & replies")} className={`${activeLink == "Tweets & replies" ? "text-[18px] text-[#000} font-bold border-[#1DA1F2]" : 'text-[18px] text-[#000] border-transparent'} border-b-[3px] rounded-t-[4px]`}>Tweets & replies</Link>
        <Link to={'media'} onClick={() => setActiveLink("Media")} className={`${activeLink == "Media" ? "text-[18px] text-[#000} font-bold border-[#1DA1F2]" : 'text-[18px] text-[#000] border-transparent'} border-b-[3px] rounded-t-[4px]`}>Media</Link>
        <Link to={'likes'} onClick={() => setActiveLink("Likes")} className={`${activeLink == "Likes" ? "text-[18px] text-[#000} font-bold border-[#1DA1F2]" : 'text-[18px] text-[#000] border-transparent'} border-b-[3px] rounded-t-[4px]`}>Likes</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Profile