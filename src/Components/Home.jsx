import React from 'react';
import { useTextAnimation } from './useTextAnimation';

const Home = () => {
    useTextAnimation();
    return (
        <div className='main w-screen h-fit bg-[#222222] flex justify-center overflow-hidden px-4 py-10 lg:px-6 md:px-6 sm:px-6  lg:py-10 md:py-10  sm:pt-12 sm:pb-10  items-center overflow-x-hidden'>
            <div className='w-full min-h-[70vh] box-border rounded-xl lg:rounded-3xl justify-between flex bg-[#141414]  h-full my-1  lg:px-12 pt-12 lg:pb-12 pb-3 flex-col'>
                <div className=" h-full mt-8 justify-around  grow  md:px-8  mx-8 md:mt-[13vh] flex flex-col gap-4">
                    <div className="nitin flex gap-3 justify-start items-center">
                        <div className='blink h-[0.125rem] w-[0.125rem] rounded-full min-w-[10px] min-h-[10px] bg-primary'></div>
                        <span>
                            <h1 className="upperText md:font-bold lg:font-bold  lg:text-[1vw] md:text-[1.8vw] sm:text-md text-[3vw] text-text md:leading-1 md:tracking-normal lg:tracking-wider leading-0 sm:leading-1 sm:tracking-normal lg:leading-5 capitalize">
                                Explore our collection of high-quality, engaging board games for all ages and skill levels.
                            </h1>
                        </span>
                    </div>
                    <h2 className="mainText lg:text-[6vw] md:text-[6vw] font-extrabold  lg:w-3/4 md:w-full  text-[10vw] sm:text-[9.5vw] text-text font-spaceGrotesk leading-none  tracking-normal">
                        Discover the Joy of Board Games
                    </h2>
                    <div className="flex flex-wrap justify-between items-end py-4 w-full ">
                        <div className="opacity-80 md:font-bold lg:font-bold lg:text-[1.5vw]  md:text-[1.8vw] sm:text-md text-[3vw] text-text md:leading-1 md:tracking-normal tracking-widest leading-0 sm:leading-1 lg:tracking-wide sm:tracking-normal lg:leading-9 capitalize lg:w-2/3   sm:text-md  ">
                            Building board games that dignify the interest of players and continuously improving the gaming experience, making games a part of life.
                        </div>
                        {/* <div class="w-5/6 pl-[80%] flex z-20 gap-4 flex-row justify-center items-center"> */}
                        {/* <button className='text-text'> Learn more</button> */}
                        {/* <svg
                                height="100%"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.46009 0.277253L8.20565 14.8126L9.03122 14.8258C9.20577 13.8891 9.7077 13.0326 10.4588 12.3896L13.3614 9.77656L14.525 10.8997L7.29573 17.4076L0.332226 10.6856L1.53713 9.60089L4.25203 12.2216C5.02837 12.895 5.52057 13.8051 5.63975 14.7874L6.50104 14.8014L6.77329 0.25L8.46009 0.277253Z"
                                    fill="white"
                                >

                                </path>
                            </svg> */}

                        {/* </div> */}
                    </div>
                </div>
                <div className='relative pt-5 lg:mx-8 mx-3  h-fit '>
                    <div className='block lg:hidden w-full h-full'>
                        <svg className=" responsive-svg" viewBox="0 0 1410 867" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice">
                            <defs>
                                <clipPath id="clip-path">
                                    <path d="M1314.77 0.862305C1300.15 0.862305 1288.31 19.06545 1288.31 41.9884V79.2315C1288.31 101.1545 1276.46 118.92645 1261.84 118.92645H26.7689C12.1537 118.92645 0.305664 136.99845 0.305664 158.622V402.5625C0.305664 424.185 12.1537 442.257 26.769 442.257H52.2516C66.8668 442.257 78.7148 460.329 78.7148 481.9525V535.257V649.746V826.2435C78.7148 847.867 90.5628 865.939 105.178 865.939H1097.03C1111.65 865.939 1123.5 847.867 1123.5 826.2435V729.1365C1123.5 707.513 1135.35 689.441 1149.96 689.441H1381.84C1396.46 689.441 1408.31 671.369 1408.31 649.746V409.9515C1408.31 409.9395 1408.31 409.926 1408.31 409.914C1408.3 407.478 1408.3 405.036 1408.31 402.6C1408.31 402.588 1408.31 402.576 1408.31 402.5625V230.0625V158.622V41.9884C1408.31 19.06545 1396.46 0.862305 1381.84 0.862305H1314.77Z" fill="white" />

                                </clipPath>
                            </defs>
                            <path d="M1314.77 0.862305C1300.15 0.862305 1288.31 19.06545 1288.31 41.9884V79.2315C1288.31 101.1545 1276.46 118.92645 1261.84 118.92645H26.7689C12.1537 118.92645 0.305664 136.99845 0.305664 158.622V402.5625C0.305664 424.185 12.1537 442.257 26.769 442.257H52.2516C66.8668 442.257 78.7148 460.329 78.7148 481.9525V535.257V649.746V826.2435C78.7148 847.867 90.5628 865.939 105.178 865.939H1097.03C1111.65 865.939 1123.5 847.867 1123.5 826.2435V729.1365C1123.5 707.513 1135.35 689.441 1149.96 689.441H1381.84C1396.46 689.441 1408.31 671.369 1408.31 649.746V409.9515C1408.31 409.9395 1408.31 409.926 1408.31 409.914C1408.3 407.478 1408.3 405.036 1408.31 402.6C1408.31 402.588 1408.31 402.576 1408.31 402.5625V230.0625V158.622V41.9884C1408.31 19.06545 1396.46 0.862305 1381.84 0.862305H1314.77Z" fill="white" />
                            {/* <iframe width="854" height="480" src="https://www.youtube.com/embed/DsFQJfwzbqA" title="Align It New Promo Video - Nine Men&#39;s Morris | Morabaraba | Twelve Men&#39;s Morris | Mill | Board Game" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                            {/* <image href="https://cdn.prod.website-files.com/63c560228fad5afe6ddbe1a4/646f7b0e442d7e02b27f5d11_ctc-home-header.webp" x="0" y="0" height="578px" width="1408px" clipPath="url(#clip-path)" /> */}
                        </svg>
                    </div>
                    <div className=''>
                        <div className='lg:block relative hidden w-full h-full'>
                            <svg className="responsive-svg" viewBox="0 0 1410 578" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                                <defs>
                                    <clipPath id="clip-path">
                                        <path d="M 1314.77 0.862305 C 1300.15 0.862305 1288.31 12.7103 1288.31 27.3256 V 52.821 C 1288.31 67.4363 1276.46 79.2843 1261.84 79.2843 H 26.7689 C 12.1537 79.2843 0.305664 91.1323 0.305664 105.748 V 268.375 C 0.305664 282.99 12.1537 294.838 26.769 294.838 H 52.2516 C 66.8668 294.838 78.7148 306.686 78.7148 321.301 V 356.838 V 433.164 V 550.829 C 78.7148 565.444 90.5628 577.292 105.178 577.292 H 1097.03 C 1111.65 577.292 1123.5 565.444 1123.5 550.829 V 486.091 C 1123.5 471.476 1135.35 459.628 1149.96 459.628 H 1381.84 C 1396.46 459.628 1408.31 447.78 1408.31 433.164 V 273.301 C 1408.31 273.293 1408.31 273.284 1408.31 273.276 C 1408.3 271.652 1408.3 270.024 1408.31 268.4 C 1408.31 268.391 1408.31 268.383 1408.31 268.375 V 153.375 V 105.748 V 27.3256 C 1408.31 12.7103 1396.46 0.862305 1381.84 0.862305 H 1314.77 Z" fill="white" />
                                    </clipPath>
                                </defs>
                                <path d="M 1314.77 0.862305 C 1300.15 0.862305 1288.31 12.7103 1288.31 27.3256 V 52.821 C 1288.31 67.4363 1276.46 79.2843 1261.84 79.2843 H 26.7689 C 12.1537 79.2843 0.305664 91.1323 0.305664 105.748 V 268.375 C 0.305664 282.99 12.1537 294.838 26.769 294.838 H 52.2516 C 66.8668 294.838 78.7148 306.686 78.7148 321.301 V 356.838 V 433.164 V 550.829 C 78.7148 565.444 90.5628 577.292 105.178 577.292 H 1097.03 C 1111.65 577.292 1123.5 565.444 1123.5 550.829 V 486.091 C 1123.5 471.476 1135.35 459.628 1149.96 459.628 H 1381.84 C 1396.46 459.628 1408.31 447.78 1408.31 433.164 V 273.301 C 1408.31 273.293 1408.31 273.284 1408.31 273.276 C 1408.3 271.652 1408.3 270.024 1408.31 268.4 C 1408.31 268.391 1408.31 268.383 1408.31 268.375 V 153.375 V 105.748 V 27.3256 C 1408.31 12.7103 1396.46 0.862305 1381.84 0.862305 H 1314.77 Z" fill="white" />
                                {/* <iframe width="854" height="480" src="https://www.youtube.com/embed/DsFQJfwzbqA" title="Align It New Promo Video - Nine Men&#39;s Morris | Morabaraba | Twelve Men&#39;s Morris | Mill | Board Game" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                                {/* <image href="https://cdn.prod.website-files.com/63c560228fad5afe6ddbe1a4/646f7b0e442d7e02b27f5d11_ctc-home-header.webp" x="0" y="0" height="867" width="1410" clipPath="url(#clip-path)" /> */}
                            </svg>
                        </div>
                        <div className="buttons overflow-hidden flex justify-around items-center gap-[1px] absolute w-[19%] h-[17%] lg:w-[19.5%] lg:h-[18%] md:w-[19.5%] md:h-[18%] rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl right-0 bottom-0 ">
                            <button className='Left h-full bg-white grow'></button>
                            <button className='Right h-full bg-white grow'></button>
                        </div>
                        <div className='absolute rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl w-[4.4%] h-[43%] lg:w-[4.9%] lg:h-[45%] md:w-[4.9%] md:h-[45%] left-0 bottom-0 bg-white'>
                        </div>
                        <div className='absolute rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl top-5 left-0 w-[90.5%]  h-[11.5%] lg:h-[11%] bg-white' >

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
