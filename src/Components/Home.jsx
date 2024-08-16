import React, { useEffect } from 'react';
import { useTextAnimation } from './useTextAnimation';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import Games from './Games';
// import Slider from './Slider';
// import { PiGameControllerFill } from "react-icons/pi";
const Home = () => {
  useTextAnimation();

  return (
    <div className='main w-screen h-fit relative flex justify-center to-[#ddebff] bg-gradient-to-b from-[#c7e4ffc7]   px-3 py-10 lg:px-6 md:px-6 sm:px-6 lg:py-10 md:py-10 sm:pt-12 sm:pb-10 items-center'>

      <div className='overflow-hidden shadow-2xl shadow-[#6898db] z-10 backdrop-blur-md w-full min-h-[70vh] box-border rounded-xl lg:rounded-3xl justify-between flex bg-gradient-to-r  from-[#f9feff] via-[#ffffff] to-[#fff9f9]  border-black border-[2px] md:border-4  h-full my-1 lg:px-12 pt-12 lg:pb-12 pb-3 flex-col'>

        <iframe className='absolute h-full w-full left-0 top-0' src="https://ncjpr04.github.io/Hexagon-background-with-Cursor-effect/" frameborder="0"></iframe>
        <div className="h-full mt-8 justify-around grow md:px-8 mx-8 md:mt-[13vh] flex flex-col gap-4">
          <div className="pointer-events-none flex gap-3 justify-start items-center">
            <div className='blink h-[0.125rem] w-[0.125rem] rounded-full min-w-[10px] min-h-[10px] bg-primary'></div>
            <span>
              <h1 className="upperText md:font-bold lg:font-bold lg:text-[1vw] md:text-[1.8vw] sm:text-md text-[3vw] text-black md:leading-1 md:tracking-normal lg:tracking-wider leading-0 sm:leading-1 sm:tracking-normal lg:leading-5 capitalize">
                Explore our collection of high-quality, engaging board games for all ages and skill levels.
              </h1>
            </span>
          </div>
          <h2 className=" pointer-events-none mainText lg:text-[6vw] md:text-[6vw] font-extrabold lg:w-3/4 md:w-full text-[10vw] sm:text-[9.5vw] text-black font-spaceGrotesk leading-none tracking-normal">
            Discover the Joy of Board Games
          </h2>
          <div className="flex pointer-events-none flex-wrap justify-between items-end py-4 w-full">
            <div className="lowerText opacity-80 md:font-bold lg:font-bold lg:text-[1.5vw] md:text-[1.8vw] sm:text-md text-[3vw] text-black md:leading-1 md:tracking-normal tracking-widest leading-0 sm:leading-1 lg:tracking-wide sm:tracking-normal lg:leading-9 capitalize lg:w-2/3 sm:text-md">
              Building board games that dignify the interest of players and continuously improving the gaming experience, making games a part of life.
            </div>
          </div>
        </div>
        <div className=' relative  pt-5 lg:mx-8 mx-3 h-fit '>
          <svg className="responsive-svg  outline-none" viewBox="0 0 1410 867" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice">
            <defs>
              <clipPath id="clip-path">
                <path d="M1314.77 0.862305C1300.15 0.862305 1288.31 19.06545 1288.31 41.9884V79.2315C1288.31 101.1545 1276.46 118.92645 1261.84 118.92645H26.7689C12.1537 118.92645 0.305664 136.99845 0.305664 158.622V402.5625C0.305664 424.185 12.1537 442.257 26.769 442.257H52.2516C66.8668 442.257 78.7148 460.329 78.7148 481.9525V535.257V649.746V826.2435C78.7148 847.867 90.5628 865.939 105.178 865.939H1097.03C1111.65 865.939 1123.5 847.867 1123.5 826.2435V729.1365C1123.5 707.513 1135.35 689.441 1149.96 689.441H1381.84C1396.46 689.441 1408.31 671.369 1408.31 649.746V409.9515C1408.31 409.9395 1408.31 409.926 1408.31 409.914C1408.3 407.478 1408.3 405.036 1408.31 402.6C1408.31 402.588 1408.31 402.576 1408.31 402.5625V230.0625V158.622V41.9884C1408.31 19.06545 1396.46 0.862305 1381.84 0.862305H1314.77Z" />
              </clipPath>
            </defs>
            <path d="M1314.77 0.862305C1300.15 0.862305 1288.31 19.06545 1288.31 41.9884V79.2315C1288.31 101.1545 1276.46 118.92645 1261.84 118.92645H26.7689C12.1537 118.92645 0.305664 136.99845 0.305664 158.622V402.5625C0.305664 424.185 12.1537 442.257 26.769 442.257H52.2516C66.8668 442.257 78.7148 460.329 78.7148 481.9525V535.257V649.746V826.2435C78.7148 847.867 90.5628 865.939 105.178 865.939H1097.03C1111.65 865.939 1123.5 847.867 1123.5 826.2435V729.1365C1123.5 707.513 1135.35 689.441 1149.96 689.441H1381.84C1396.46 689.441 1408.31 671.369 1408.31 649.746V409.9515C1408.31 409.9395 1408.31 409.926 1408.31 409.914C1408.3 407.478 1408.3 405.036 1408.31 402.6C1408.31 402.588 1408.31 402.576 1408.31 402.5625V230.0625V158.622V41.9884C1408.31 19.06545 1396.46 0.862305 1381.84 0.862305H1314.77Z" />
            <foreignObject x="0" y="0" width="1410" height="917" clipPath="url(#clip-path)">
              <Games />
            </foreignObject>
          </svg>
          <div className='Boxes'>
            <div className="buttons overflow-hidden  cursor-pointer flex justify-around shadow-md shadow-[#6898db] border-[#000000] border-[1px] bg-[#ddefffc7] backdrop-blur-md items-center gap-[1px] absolute w-[19%] lg:w-[19.3%] md:h-[18%] h-[17%] lg:h-[18.5%] rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl right-0 bottom-0">
              {/* <IconContext.Provider value={{ color: "#222222", className: "h-full w-full lg:p-[30%] p-[37%] " }}>
                <button className='prev flex justify-center items-center w-1/2 h-full '><FaChevronLeft /></button>
                <button className='next flex justify-center items-center w-1/2 h-full '><FaChevronRight /></button>
              </IconContext.Provider> */}
              <h3>Explore</h3>
            </div>
            <div className='absolute shadow-md   cursor-pointer  shadow-[#6898db] border-[#000000] border-[1px] bg-[#ddefffc7]  flex flex-col justify-center items-center rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl w-[4.4%] h-[43%] lg:w-[4.9%] lg:h-[46.5%] md:w-[4.9%] md:h-[46%] left-0 bottom-0 '>
              <h1 className='rotate-[270deg]  text-black  w-2/3 whitespace-nowrap flex justify-center items-center text-[2vw] font-spaceGrotesk font-bold '>
                Our Goal
              </h1>
            </div>

            <div className='absolute shadow-md cursor-pointer shadow-[#6898db] border-[#000000] border-[1px] bg-[#ddefffc7]  backdrop-blur-md  rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl top-5 left-0 lg:w-[90.5%] md:w-[90%] w-[90%] md:h-[11%] h-[10.5%] lg:h-[12%] ' >

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
