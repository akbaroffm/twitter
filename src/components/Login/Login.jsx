import React from 'react'
import Logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

function Login({setToken}) {
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const data = {
            email:evt.target.email.value,
            password:evt.target.password.value
        }
        setToken(data);
        window.localStorage.setItem("token",JSON.stringify(data) )
    }
  return (
   <div className='flex items-center mt-[100px] flex-col'>
        <div className='flex flex-col mb-[32px] justify-start'>
            <img src={Logo} alt="logo" width={50} height={41}/>
            <h2 className=' text-start font-[900] text-[#000] text-[32px] mt-[32px]'>Log in to Twitter</h2>
        </div>
     <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className='flex flex-col gap-[25px]'>
            <label>
                <input className='w-[400px] py-[15px] pl-[15px] border-2 border-[#ccc] rounded-[6px] outline-none' type="text" name="email" placeholder="email address"/>
            </label>
            <label>
                <input className='w-[400px] py-[15px] pl-[15px] border-2 border-[#ccc] rounded-[6px] outline-none' name='password' type="password" placeholder='password' />
            </label>
            <button className='w-[400px] py-[15px] outline-none bg-[#1DA1F2] text-white rounded-[76px] font-bold leading-[24px] text-[18px]'>Log In</button>
            <div className='flex justify-between mt-[15px]'>
                <NavLink className={'text-[#1DA1F2] text-[18px] leading-[24px] font-[400]'}>Forgot password?</NavLink>
                <NavLink className={'text-[#1DA1F2] text-[18px] leading-[24px] font-[400]'}>Sign up to Twitter</NavLink>
            </div>
        </div>
    </form>
   </div>
  )
}

export default Login