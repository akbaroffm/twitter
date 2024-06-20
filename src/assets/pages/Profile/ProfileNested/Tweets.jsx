import React from 'react'
import PostItem from '../../../../components/PostItem/PostItem'
import Bobur from '../../../images/bobur.svg'
import Hero from '../../../images/heroimg.png'
import Pinned from '../../../images/pin.svg'

function Tweets() {
  return (
    <div className='overflow-y-hidden'>
      <div className='flex pb-[5px] pl-[40px] pt-[10px] items-center space-x-[15px]'>
        <img src={Pinned} alt="ping" />
        <span className='font-[600] text-[#536471]'>Pinned Tweet</span>
      </div>
      <ul>
        <PostItem commentCount={10} likeCount={1} postHeroImg={null} retweet={8} key={1} avatarIcon={Bobur} userEmail={'@bobur_mavlonov'} userName={'Bobur'} postBody={"4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"}/>
        <PostItem commentCount={5} likeCount={9} postHeroImg={null} retweet={0} key={2} avatarIcon={Bobur} userEmail={'@bobur_mavlonov'} userName={'Bobur'} postBody={"Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas."}/>
        <PostItem commentCount={10} likeCount={12} postHeroImg={Hero} retweet={8} key={3} avatarIcon={Bobur} userEmail={'@bobur_mavlonov'} userName={'Bobur'} postBody={"A bo'pti maskamasman"}/>
      </ul>
    </div>
  )
}

export default Tweets