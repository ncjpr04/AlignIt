import React from 'react';

function Home() {
    return (
        <div className='main lg:h-fit md:h-fit sm:h-fit h-screen w-[100vw] bg-[#222222] flex justify-center overflow-hidden px-5 lg:px-6 md:px-6 sm:px-6  lg:py-10 md:py-10 pt-12 sm:pt-12 sm:pb-10  items-center overflow-x-hidden'>
            <div className='w-full box-border rounded-3xl flex bg-[#141414] h-fit px-4 sm:px-8 md:px-8 lg:px-8 py-8  flex-col'>
                <div>

                </div>
                <div className=' w-full flex md:flex-col flex-col sm:flex-col  lg:flex-col justify-center items-center'>
                    {/* <div className="max-w-3xl sticky top-0 mt-2 bg-[#222222] rounded-full  mx-auto   w-5/6 h-[4rem]">
                    </div> */}
                    <div class="sm:px-8 px-5 sm:pt-20 md:px-8 pt-10  md:pt-36 flex flex-col gap-4">
                        <div class="flex gap-4 justify-start items-center">
                            <div className='h-[0.125rem] w-[0.125rem] rounded-full min-w-[10px] min-h-[10px] bg-primary'></div>
                            <span class="font-extrabold  lg:text-[1vw] md:text-[1.8vw] sm:text-md text-[2.4vw] text-text leading-5 capitalize">
                                Explore our collection of high-quality, engaging board games for all ages and skill levels.
                            </span>
                        </div>
                        <h2 class="lg:text-[6vw] md:text-[6vw] lg:w-3/4 md:w-3/4  text-[10vw] sm:text-[9.5vw] text-text leading-none  tracking-normal">
                        Discover the Joy of Board Games
                        </h2>
                        <div class="flex flex-wrap justify-between items-end py-4 w-full ">
                            <div class="opacity-80 w-1/2 lg:text-[1.5vw] md:text-[2.2vw] sm:text-md text-[2.4vw] text-text  font-semibold">
                            Building board games that dignify the interest of players and continuously improving the gaming experience, making games a part of life.
                            </div>
                            <div class="w-1/4 flex z-20 gap-4 justify-center items-center">
                                <div class="min-w-fit">
                                    <img src="/images/logos/partner-wf.svg" alt="partner wf" />
                                </div>
                                <div class="flex justify-center text-text items-center">
                                    {/* <CustomButton class="bg-white text-background"> */}
                                        Learn more
                                            <svg
                                                height="100%"
                                                viewBox="0 0 15 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.46009 0.277253L8.20565 14.8126L9.03122 14.8258C9.20577 13.8891 9.7077 13.0326 10.4588 12.3896L13.3614 9.77656L14.525 10.8997L7.29573 17.4076L0.332226 10.6856L1.53713 9.60089L4.25203 12.2216C5.02837 12.895 5.52057 13.8051 5.63975 14.7874L6.50104 14.8014L6.77329 0.25L8.46009 0.277253Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                    {/* </CustomButton> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full px-6'>
                    <svg className="responsive-svg" viewBox="0 0 1410 578" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice">
                        <defs>
                            <clipPath id="clip-path">
                                <path d="M1314.77 0.862305C1300.15 0.862305 1288.31 12.7103 1288.31 27.3256V52.821C1288.31 67.4363 1276.46 79.2843 1261.84 79.2843H26.7689C12.1537 79.2843 0.305664 91.1323 0.305664 105.748V268.375C0.305664 282.99 12.1537 294.838 26.769 294.838H52.2516C66.8668 294.838 78.7148 306.686 78.7148 321.301V356.838V433.164V550.829C78.7148 565.444 90.5628 577.292 105.178 577.292H1097.03C1111.65 577.292 1123.5 565.444 1123.5 550.829V486.091C1123.5 471.476 1135.35 459.628 1149.96 459.628H1381.84C1396.46 459.628 1408.31 447.78 1408.31 433.164V273.301C1408.31 273.293 1408.31 273.284 1408.31 273.276C1408.3 271.652 1408.3 270.024 1408.31 268.4C1408.31 268.391 1408.31 268.383 1408.31 268.375V153.375V105.748V27.3256C1408.31 12.7103 1396.46 0.862305 1381.84 0.862305H1314.77Z" />
                            </clipPath>
                        </defs>
                        <path d="M1314.77 0.862305C1300.15 0.862305 1288.31 12.7103 1288.31 27.3256V52.821C1288.31 67.4363 1276.46 79.2843 1261.84 79.2843H26.7689C12.1537 79.2843 0.305664 91.1323 0.305664 105.748V268.375C0.305664 282.99 12.1537 294.838 26.769 294.838H52.2516C66.8668 294.838 78.7148 306.686 78.7148 321.301V356.838V433.164V550.829C78.7148 565.444 90.5628 577.292 105.178 577.292H1097.03C1111.65 577.292 1123.5 565.444 1123.5 550.829V486.091C1123.5 471.476 1135.35 459.628 1149.96 459.628H1381.84C1396.46 459.628 1408.31 447.78 1408.31 433.164V273.301C1408.31 273.293 1408.31 273.284 1408.31 273.276C1408.3 271.652 1408.3 270.024 1408.31 268.4C1408.31 268.391 1408.31 268.383 1408.31 268.375V153.375V105.748V27.3256C1408.31 12.7103 1396.46 0.862305 1381.84 0.862305H1314.77Z" fill="black" />
                        <image href="https://cdn.prod.website-files.com/63c560228fad5afe6ddbe1a4/646f7b0e442d7e02b27f5d11_ctc-home-header.webp" x="0" y="0" height="578px" width="1408px" clipPath="url(#clip-path)" />
                    </svg>
                    </div>
                </div>
                <div>

                </div>

            </div>
        </div>
    );
}

export default Home;
