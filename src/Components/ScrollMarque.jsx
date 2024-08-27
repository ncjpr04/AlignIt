import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from "react-icons/fa";
import 'tailwindcss/tailwind.css';
import { FaRegStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function ScrollMarque() {
    useEffect(() => {


        const animationleft1 = gsap.to("#left1", {
            x: "-20%",
            scrollTrigger: {
                trigger: "#page",
                scroller: "body",
                // markers: true,
                start: "top 60%",
                end: "bottom 20%",
                scrub: 1,
                // pin: true,
            }
        });
        const animationleft2 = gsap.to("#left2", {
            x: "-40%",
            scrollTrigger: {
                trigger: "#page",
                scroller: "body",
                // markers: true,
                start: "top 20%",
                end: "bottom 20%",
                scrub: 1,
                // pin: true,
            }
        });
        const animationright = gsap.to("#right", {
            x: "20%",
            scrollTrigger: {
                trigger: "#page",
                scroller: "body",
                // markers: true,
                start: "top 40%",
                end: "bottom 20%",
                scrub: 1,
                // pin: true,
            }
        });



        return () => {

            animationleft1.scrollTrigger.kill();
            animationleft1.kill();
            animationleft2.scrollTrigger.kill();
            animationleft2.kill();
            animationright.scrollTrigger.kill();
            animationright.kill();
        };
    }, []);

    return (
        <div id='reviews' className=' w-screen  relative bg-[#ddebff]'>
            <div id="page" className='md:h-screen  pb-10 bg-gradient-to-t from-white to-[#ddebff] md:w-full gap-5 overflow-hidden  flex flex-col lg:py-36  md:py-18 sm:pt-12 sm:pb-10 justify-center items-center '>
                <div id="left1" className="h-1/3 gap-5 flex justify-center">
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/ludo.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/ludo.avif" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Divyanshu Yadav
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>
                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " Fun and engaging, perfect for family game nights. Love it! "
                                </div>
                            </div>
                        </div>
                    </a>   
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/solo.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex  justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjVCFTDcEntfy4W6tIA2Z6VsvkC4b_HKgCqpcXo8Iy8TZNIi_uGo=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Divyanshu Yadav
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaStar color="gold" /> */}
                                            <FaRegStar />
                                        </div>
                                    </h3>
                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " Perfect blend of strategy and entertainment. The interface is user-friendly and engaging. Love it! "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-36 max-w-[30%] max-h-[200px] lg:min-w-[40%] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/ludo.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full pb-2 rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/Nitin.avif" alt="" className='profile  w-14 h-14 hidden md:flex  bg-[#ddf4ffc7] rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center  text-lg font-semibold text-black justify-between">
                                        Nitin Choudhary
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]  text-center flex justify-center items-center">
                                    " Fantastic gameplay, smooth interface, and extremely addictive. Highly recommend downloading! "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='hidden md:block h-full max-w-[30%] min-w-[40%] md:min-w-[500px] max-h-[200px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/watersort.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjVmIq0p782F-okO9Gv6oo6qNFQWSZALB5o1bjvwtNiD04ItABqC=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Faiyan Ahmed
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaStar color="gold" /> */}
                                            <FaRegStar />
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " Fantastic gameplay, smooth interface, and extremely addictive. Highly recommend downloading! "
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div id="right" className=" h-1/3  gap-5 justify-center flex ">
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/unlockcar.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjV9wnsZrUq0_a3VwKgnZyc9qqH_7GH8g3qruFeTVDDjhjnHA7fA=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Ritam Chakraborty
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " The game is very very nice.  Thanks for making Indian desi game "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/tictactoe.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjXcLUQ0zGwW7wW7yp5kcfXWiAk-a4pmpcz24sWvW6XCYSBALwmU=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Jumma Aamir
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " A must-have for board game lovers. Amazing design, and endless replayability. Can't stop playing! "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/threemanmorris.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjXkxFCjkCi1FioCJ5zmMPCmYS-pzUqGr9puGxxC-VOYuu8wjEtfbA=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Digambar Khatawkar
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " Top-notch experience! Great mix of strategy and fun. A must-download for all board game fans. "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/sudoku.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjWiKt8ih1_1MIuUuAq2M1F-CnQNh_j9CvgG1AEx1LBWmschQow=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Mr. Bread
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " The perfect mix of strategy and fun. Simple to learn, difficult to master. Highly entertaining! "
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div id="left2" className="h-1/3 gap-5 justify-center flex ">
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/mancala.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjUwvwxw0PMCZGg97si3_iE3lISjBqq3lB5jP4lJZLwpr7NSyP8f=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Rahul Yadav
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " This is very nice game .I play daily .it's features are simply that every body play easily "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/shataranj.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjWC1QMKsIxBXPFYLCW6IPuyWBQekaR3pHCSxRbr1lCwK_qUcg=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Dharmendra Kumar Jha
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " It is a great game.i have been playing this game for a year. "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/dominoes.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjUpgp2AxbZ9dBFKSaCjzoNGdv-KMn4-K5PyCimjIOfheIxS6g-y=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                    Shiv Lakhera
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " Incredible app, love the features and multiplayer mode. A must-have! "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className='h-full min-h-36 max-w-[30%] lg:min-w-[40%] max-h-[200px] min-w-[500px]'>
                        <div className='h-full flex gap-2 items-center p-2 rounded-3xl  w-full bg-[#ddf4ffc7] border-[#00aeff] border-[1px] shadow-lg shadow-[#6898db]  cursor-pointer'>
                            <img preload src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/checkers.avif" alt="" className=' max-h-[100%] max-w-[40%] hidden md:flex justify-center items-center  rounded-2xl shadow-md shadow-[#6898db]  ' />
                            <div className="left w-full p-1 h-full rounded-2xl shadow-md shadow-[#6898db] bg-white border-[#000000] border-[1px] items-center flex flex-col gap-1 justify-around">
                                <div className="profile w-full h-16  flex   justify-center  md:mt-2 gap-1 px-2 ">
                                    <img preload src="https://play-lh.googleusercontent.com/a-/ALV-UjX8rWNhfEI09TUii8UXwpYFBLVXJFPlIG9oTtVcIyFQDH3gm7k=s32-rw" alt="" className='profile w-14 h-14 hidden md:flex   rounded-xl' />
                                    <h3 className="info  w-full h-14  rounded-xl  flex items-center px-2 text-lg font-semibold text-black justify-between">
                                       Kalpana Sharma
                                        <div className="stars h-10 w-1/2  flex justify-center items-center gap-1">
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            <FaStar color="gold" />
                                            {/* <FaRegStar /> */}
                                        </div>
                                    </h3>

                                </div>
                                <div className="Text w-full h-16 rounded-xl  text-black text-[14px]    text-center flex px-2 justify-center items-center">
                                    " Fun and engaging, perfect for family game nights. Love it! "
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://play.google.com/store/apps/dev?id=6071653399714923628" target='blank' className='h-full  min-w-[10%]'>
                        <div className='h-full flex max-h-[200px] gap-2 items-center p-2 rounded-3xl  w-full bg-[#000000c7] hover:bg-black border-[#000000] border-[1px] shadow-lg shadow-[#000000]  cursor-pointer'>
                            <h3 className=' h-full  flex justify-center items-center text-[2rem] flex-wrap text-center font-bold text-white  w-full ' >
                                Explore More !
                            </h3>
                           
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ScrollMarque;
