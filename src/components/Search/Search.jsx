import React from 'react';
import SearchIcon from '../../assets/images/searchicon.svg';
import SettingsIcon from '../../assets/images/settings.svg'
import TrendNews from '../TrendNews/TrendNews';
import Following from '../Following/Following';
import ProfileIcon1 from '../../assets/images/profileIcon1.svg'
import ProfileIcon2 from '../../assets/images/profileIcon2.svg'
import SearchImg from '../../assets/images/searchimg.png'

function Search({searchState}) {
  return (
   <div className='h-[100vh] overflow-y-auto pr-[28px] pb-[30px]'>
         <div className="relative">
            <input className="bg-[#EFF3F4] py-3 pr-4 pl-[50px] rounded-full w-full" type="text" name="search" placeholder="Search Twitter"
            />
            <img className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" src={SearchIcon} alt="search" width={24} height={24}
            />
        </div>
        <div className='py-[15px]'>
            {searchState && 
                <img src={SearchImg} alt="search" />
            }
        </div>
        <div className='bg-[#F7F9F9] rounded-[10px] p-5'>
        <div className='flex items-center justify-between mt-[10px]'>
            <h3 className='font-[700] text-[22px] leading-[32px] text-[#000]'>Trends for you</h3>
            <button className='border-none outline-none'>
                <img src={SettingsIcon} alt="settings" width={24} height={24}/>
            </button>
        </div>
        <div>
            <TrendNews where={'Trending in Germany'} title={'Revolution'} number={'50.4K Tweets'}/>
            <TrendNews where={'Trending in Germany'} title={'Revolution'} number={'50.4K Tweets'}/>
            <TrendNews where={'Trending in Germany'} title={'Revolution'} number={'50.4K Tweets'}/>
            <button className='mt-[30px] text-[17px] text-[#1DA1F2] leading-[18px] font-[400]'>Show more</button>
        </div>
        </div>
        <div className='mt-[50px] bg-[#F7F9F9] rounded-[10px] p-5'>
            <h3 className='font-[700] text-[22px] leading-[32px] text-[#000] mb-[25px]'>You might like</h3>
            <div className='flex flex-col gap-[25px]'>
                <Following url={ProfileIcon1} name={"Mushtariy"} username={'@Mushtar56'}/>
                <Following url={ProfileIcon2} name={"Shuhratbek"} username={'@mrshukhrat'}/>
            </div>
            <button className='mt-[30px] text-[17px] text-[#1DA1F2] leading-[18px] font-[400]'>Show more</button>
        </div>
   </div>
  );
}

export default Search;
