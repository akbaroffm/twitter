import React, { useEffect, useState } from 'react'
import BoburIcon from "../../images/bobur.svg"

import PicFile from "../../images/image.svg"
import Gif from "../../images/gif.svg"
import Statistic from "../../images/stats.svg"
import Smile from '../../images/smile.svg'
import Date from "../../images/schedule.svg"
import designs from '../../images/designsta.svg'
import clouth from '../../images/clouth.svg'
import creativ from '../../images/creative.svg'
import obet from '../../images/obet.png'
import PostItem from '../../../components/PostItem/PostItem'
import Header from '../../../components/Header/Header'

function Home({setSearchState}) {
  useEffect(() =>{
    setSearchState(false)
  })
  const [posts, setPosts] = useState([
    {
      id:3,
      avatarIcon:designs,
      userName:"Design",
      userEmail:'@inner',
      postBody:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount:10,
      retweet:1,
      likeCount:8,
      postHeroImg:null
    },
    {
      id:2,
      avatarIcon:clouth,
      userName:"cloutexhibition",
      userEmail:'@RajLahoti',
      postBody:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount:0,
      retweet:5,
      likeCount:9,
      postHeroImg:0
    },
    {
      id:1,
      avatarIcon:creativ,
      userName:"CreativePhoto",
      userEmail:'@cloutexhibition',
      postBody:"Обетда..... Кечиринглар",
      commentCount:10,
      retweet:1,
      likeCount:8,
      postHeroImg:obet
    }
  ])

  const [postImgUrl, setpostImgUrl] = useState(null)
  const handleChangeImg = (evt) => {
    setpostImgUrl(URL.createObjectURL(evt.target.files[0]))
  }

  const handleAddPost = (evt) => {
    evt.preventDefault()
    const data = {
      id: posts.length ? posts[0].id + 1 : 1,
      avatarIcon: BoburIcon,
      userName: 'Bobur',
      userEmail: '@bobur_mavlonov',
      postBody: evt.target.postBody.value,
      commentCount: 0,
      retweet: 0,
      likeCount: 0,
      postHeroImg: postImgUrl ? postImgUrl : null
    }
    setPosts([data, ...posts])
    evt.target.reset()
    setpostImgUrl(null)
  }
  
  return (
    <div className='h-[100vh] overflow-y-auto pb-[30px] '>
        <Header title={"Home"}/>
      <form onSubmit={handleAddPost} className='px-5 pt-2 pb-[48px] relative border-b-[1px] border-slate-400'>
        <div className='flex space-x-[15px]'>
            <img className='w-[60px] h-[60px]' src={BoburIcon} alt="Bobur Icon" width={60} height={60} />
            <div className='w-full'>
            <input autoComplete='off' required name='postBody' className="w-full p-2 outline-none border-b-[1px] focus:border-blue-700  placeholder:text-[18px] font-semibold text-gray-500" type="text" placeholder="What’s happening"/>
              <div className='mt-[32px] flex items-center space-x-[20px]'>
                <label className='w-[20px] h-[20px] '>
                  <img src={PicFile} alt='Icon' width={20} height={20}/>
                  <input type="file" onChange={handleChangeImg} className='scale-0 opacity-0 w-[20px] h-[20px]'/>
                </label>
                <button type='button' className='w-[20px] h-[20px]'>
                  <img src={Gif} alt='Icon' width={20} height={20}/>
                </button>
                <button type='button' className='w-[20px] h-[20px]'>
                  <img src={Statistic} alt='Icon' width={20} height={20}/>
                </button>
                <button type='button' className='w-[20px] h-[20px]'>
                  <img src={Smile} alt='Icon' width={20} height={20}/>
                </button>
                <button type='button' className='w-[20px] h-[20px]'>
                  <img src={Date} alt='Icon' width={20} height={20}/>
                </button>
              </div>
            </div>
        </div>
        <button type='submit' className='w-[108px] py-[12px] bg-[#1D9BF0] rounded-[40px] text-[18px] opacity-50 hover:opacity-100 transition text-white font-semibold absolute bottom-[5px] right-[18px]'>Tweet</button>
      </form>
      <ul className=' overflow-x-hidden'>
        {posts.map(item => (
          <PostItem key={item.id} avatarIcon={item.avatarIcon} userEmail={item.userEmail} userName={item.userName} postBody={item.postBody} commentCount={item.commentCount} likeCount={item.likeCount} retweet={item.retweet} postHeroImg={item.postHeroImg}/>
        ))}
      </ul>
    </div>
  )
}

export default Home