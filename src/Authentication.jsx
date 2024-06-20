import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Explore from './assets/pages/Explore/Explore'
import Notification from './assets/pages/Notifications/Notifications'
import Messages from './assets/pages/Messages/Messages'
import Bookmarks from './assets/pages/Bookmarks/Bookmarks'
import Lists from './assets/pages/Lists/Lists'
import Profile from './assets/pages/Profile/Profile'
import More from './assets/pages/More/More'
import Search from './components/Search/Search'
import Tweets from './assets/pages/Profile/ProfileNested/Tweets'
import TweetsReplies from './assets/pages/Profile/ProfileNested/TweetsReplies'
import Media from './assets/pages/Profile/ProfileNested/Media'
import Likes from './assets/pages/Profile/ProfileNested/Likes'

function AuthenticationApp() {
    const [searchState, setSearchState] = useState(false)
  return (
   <div className='flex px-[70px]'>
    <div className='pt-[30px] navbar w-[20%] border-2 border-[#D8D8D8]  border-y-0 border-l-0 '>
        <Navbar/>
    </div>
    <div className='pt-[30px] routes w-[50%] overflow-auto'>
        <Routes>
            <Route path='/' element={<Home setSearchState={setSearchState}/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/notification' element={<Notification/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/bookmarks' element={<Bookmarks/>}/>
            <Route path='/lists' element={<Lists/>}/>
            <Route path='/profile' element={<Profile setSearchState={setSearchState} />}>
                <Route path='' element={<Tweets/>}/>
                <Route path='tweets-replies' element={<TweetsReplies/>}/>
                <Route path='media' element={<Media/>}/>
                <Route path='likes' element={<Likes/>}/>
            </Route>
            <Route path='/more' element={<More/>}/>
        </Routes>
    </div>
    <div className='pt-[30px] search-part w-[30%] pl-[28px] border-2 border-[#D8D8D8]  border-y-0 border-r-0 '>
        <div>
            <Search searchState={searchState}/>
        </div>
    </div>
   </div>
  )
}

export default AuthenticationApp