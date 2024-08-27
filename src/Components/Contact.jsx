import React from 'react'
import Tooltip from './Tooltip'
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
function Contact() {
  return (
    <div rel="preload" className='relative main h-fit min-h-screen flex-wrap flex w-screen justify-center items-center  sm:p-10 p-4 bg-[#ddebff] '>
      <iframe className='md:block hidden absolute h-full w-full left-0 top-0' src="https://ncjpr04.github.io/Hexagon-background-with-Cursor-effect/" frameborder="0"></iframe>
      <div className="inner relative flex flex-wrap gap-4 sm:p-4 p-2 border-black border-4 rounded-[2rem] shadow-2xl shadow-[#6898db] overflow-hidden bg-white h-fit w-full min-h-[70vh]  max-w-[1100px]">
        <div className="left grow flex justify-between flex-col  gap-10 rounded-2xl">
          <div className="address gap-10 flex flex-col">
            <span className='logo'>
              <img preload className='h-10 p-1 m-1' src="src/assets/logo.avif" alt="" />
            </span>
            <div className="add-info gap-4 flex flex-col">
              <div className="info  bg-red h-fit w-full flex gap-4 ml-3">
                <div className="icon h-8 w-8 rounded-md flex justify-center items-center  border-[rgb(212,212,212)] border-[1px] "><IoChatbubblesOutline style={{ width: '1.2rem', height: '1.2rem', color: 'black', }} /></div>
                <div className="info mt-1">
                  <div className="h1 text-black text-[1rem] font-bold">Chat to us</div>
                  <div className="h1 text-black font-medium">Our Friendly team is here to help.</div>
                  <div className="h1 text-black font-semibold">regleware@gmail.com</div>
                </div>
              </div>
              <div className="info  bg-red h-fit w-full flex gap-4 ml-3">
                <div className="icon h-8 w-8 rounded-md flex justify-center items-center  border-[rgb(212,212,212)] border-[1px] "><CiLocationOn  style={{ width: '1.2rem', height: '1.2rem', color: 'black', }} /></div>
                <div className="info mt-1">
                  <div className="h1 text-black text-[1rem] font-bold">Visit Us</div>
                  <div className="h1 text-black font-medium">Come say hello at our office.</div>
                  <div className="h1 text-black font-semibold">SR Plaza, Jhotwara, Gaborone,</div>
                  <div className="h1 text-black font-semibold"> Hathod, Rajasthan 302012</div>
                </div>
              </div>
              <div className="info  bg-red h-fit w-full flex gap-4 ml-3">
                <div className="icon h-8 w-8 rounded-md flex justify-center items-center  border-[rgb(212,212,212)] border-[1px] "><IoCallOutline  style={{ width: '1.2rem', height: '1.2rem', color: 'black', }} /></div>
                <div className="info mt-1">
                  <div className="h1 text-black text-[1rem] font-bold">Call us</div>
                  <div className="h1 text-black font-medium">Mon-Fri, 8 AM to 5 PM</div>
                  <div className="h1 text-black font-semibold">+91 9414173314</div>
                </div>
              </div>
            </div>
            <div className=' gap-3 flex flex-col'>
              <div className=" w-full text-center text-black text-3xl font-spaceGrotesk font-bold">Meet Our Team</div>
              <Tooltip />
            </div>
          </div>
          <div className="socials  flex gap-1 pb-1">
          <a target='blank' href='https://www.facebook.com/alignitgames/' className='cursor-pointer duration-300 ease-in-out rounded-full hover:border-[#00c3ff]  border-[1px] border-white hover:bg-[#ddefffc7] p-2'>
            <CiFacebook  style={{ width: '1.5rem', height: '1.5rem', color: 'black', }} />
            </a>
          <a target='blank' href='https://www.instagram.com/alignitgames/' className='cursor-pointer duration-300 ease-in-out rounded-full hover:border-[#00c3ff]  border-[1px] border-white hover:bg-[#ddefffc7] p-2'>
            <CiInstagram  style={{ width: '1.5rem', height: '1.5rem', color: 'black', }} />
            </a>
            <a href='https://x.com/alignitgames' target='blank' className='cursor-pointer duration-300 ease-in-out rounded-full hover:border-[#00c3ff]  border-[1px] border-white hover:bg-[#ddefffc7] p-2'>
            <FaXTwitter  style={{ width: '1.4rem', height: '1.4rem', color: 'black', }} />
            </a>
            <a target='blank' href='https://www.linkedin.com/company/align-it-games/' className='cursor-pointer duration-300 ease-in-out rounded-full hover:border-[#00c3ff]  border-[1px] border-white hover:bg-[#ddefffc7] p-2'>

            <CiLinkedin  style={{ width: '1.5rem', height: '1.5rem', color: 'black', }} />
            </a>
            <a target='blank' href='https://www.youtube.com/channel/UCqVuV1C6yIyDF2-WpE5FBag' className='cursor-pointer duration-300 ease-in-out rounded-full hover:border-[#00c3ff]  border-[1px] border-white hover:bg-[#ddefffc7] p-2'>
            <CiYoutube  style={{ width: '1.5rem', height: '1.5rem', color: 'black', }} />
            </a>
          </div>
        </div>
        <div className="right w-[58.492%] grow border-[#00c3ff] border-[1px] bg-[#ddefffc7]  rounded-[1.5rem]">
          <form action="submit" className="form flex-col flex gap-5 h-full justify-between py-14 md:px-10 px-6">
            <div className="headings flex flex-col gap-3 text-black">
              <h1 className='text-3xl font-black font-spaceGrotesk'>Got Ideas? We've got the skills. Let's team up.</h1>
              <h2 className='text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur?</h2>
            </div>
            <div className="input flex-col gap-4 flex">
              <div className="name flex gap-4 justify-center flex-wrap">
                <input required placeholder='First Name' className=' grow min-w-1/2 bg-transparent border-b-[1px] border-black h-8 outline-none cursor-text text-black font-semibold px-2' type="text" />
                <input required placeholder='Last Name' className=' grow bg-transparent border-b-[1px] border-black h-8 outline-none cursor-text text-black font-semibold px-2' type="text" />
              </div>
              <input required placeholder='Email' className='  bg-transparent border-b-[1px] border-black h-8 outline-none cursor-text text-black font-semibold px-2' type="email" />
              <input placeholder='Message' className='  bg-transparent border-b-[1px] border-black h-8 outline-none cursor-text text-black font-semibold px-2' type="text" />
            </div>

            <div className="flex gap-2  items-center">
              <input type="checkbox" className="text-primary bg-background rounded-full focus:outline-none focus:ring-0" required />
              <h6 className="text-sm text-black fontsemibold">
                I agree with the <span className="text-primary font-semibold">privacy statement</span>
              </h6>
            </div>


            <button className='p-2 rounded-md duration-300 ease-in-out hover:bg-[#383838]   bg-black'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact