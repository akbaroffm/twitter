import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import Navlink from '../Navlink/Navlink'
import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon } from '../../assets/images/Icon'
function Navbar() {
  return (
    <div className='h-[100vh] overflow-y-auto'>
        <div className='mb-[50px]'>
            <Link to={'/'}>
                <img src={Logo} alt="logo" width={40} height={33}/>
            </Link>
        </div>
        <ul className='flex gap-[28px] flex-col'>
            <Navlink URL={'/'} title={'Home'}>
                <HomeIcon/>
            </Navlink>
            <Navlink URL={'/explore'} title={'Explore'}>
                <ExploreIcon/>
            </Navlink>
            <Navlink URL={'/notification'} title={'Notification'}>
                <NotificationIcon/>
            </Navlink>
            <Navlink URL={'/messages'} title={'Messages'}>
                <MessageIcon/>
            </Navlink>
            <Navlink URL={'/bookmarks'} title={'Bookmarks'}>
                <BookmarksIcon/>
            </Navlink>
            <Navlink URL={'/lists'} title={'Lists'}>
                <ListsIcon/>
            </Navlink>
            <Navlink URL={'/profile'} title={'Profile'}>
                <ProfileIcon/>
            </Navlink>
            <Navlink URL={'/more'} title={'More'}>
                <MoreIcon/>
            </Navlink>
            <button className='w-[200px] py-[10px] bg-[#1D9BF0] text-white rounded-[40px] text-[18px] font-bold'>Tweet</button>
        </ul>
    </div>
  )
}

export default Navbar