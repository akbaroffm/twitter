import React from 'react'
import Dot from '../../assets/images/dot.svg'
import CommentIcon from '../../assets/images/commentIcon.svg'
import RetweetIcon from '../../assets/images/retweetIcon.svg'
import LikeIcon from '../../assets/images/likeIcon.svg'
import uploadIcon from '../../assets/images/uploadIcon.svg'
import StatisticsIcon from '../../assets/images/statisticIcon.svg'
import RetweetActive from '../../assets/images/retweetactive.svg'
import LikeActive from '../../assets/images/likeactive.svg'
import PostAction from '../PostAction/PostAction'

function PostItem({avatarIcon, userName, userEmail, postBody, commentCount, retweet, likeCount, postHeroImg}) {
  return (
    <li className=' relative pt-[30px] pb-[21px] border-[1px] border-[#D8D8D8]'>
        <img src={Dot} alt="dot" className='ml-[20px] absolute top-[41px] right-[25px]'/>
        <div className='flex items-start px-5'>
            <img src={avatarIcon} alt="posted user" width={60} height={60}/>
            <div className='flex flex-col ml-[15px] '>
                <div className='flex items-center space-x-[5px]'>
                    <h2 className='text-[#000] text-[20px] font-bold'>{userName}</h2>
                    <p className='text-[17px] text-[#000] opacity-60'>{userEmail}</p>
                </div>
                <div>
                    <p className='text-[17px] text-[#000] pb-[10px]'>{postBody}</p>
                </div>

                {postHeroImg ? <img className='min-w-full h-auto max-h-[453px]' src={postHeroImg} alt="Post Image" width={520} /> : null}

                <ul className='flex items-center mt-[22px] space-x-[70px]'>
                    <PostAction activeIcon={CommentIcon} actionIcon={CommentIcon} actionCount={commentCount} />
                    <PostAction activeColor={'text-green-500'} activeIcon={RetweetActive} actionIcon={RetweetIcon} actionCount={retweet}/>
                    <PostAction activeColor={'text-red-500'} activeIcon={LikeActive} actionIcon={LikeIcon} actionCount={likeCount}/>
                    <PostAction activeIcon={uploadIcon} actionIcon={uploadIcon}/>
                    <PostAction activeIcon={StatisticsIcon} actionIcon={StatisticsIcon}/>
                </ul>
            </div>
        </div>
    </li>
  )
}

export default PostItem