import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function GameList() {

    useEffect(() => {


        const animation = gsap.to(".slide", {
            width: "100vh",
            scrollTrigger: {
                trigger: "#page",
                scroller: "body",
                markers: true,
                // start: "top",
                // end: "bottom 20%",
                scrub: 1,
                pin: true,
            }
        });

        return () => {

            animation.scrollTrigger.kill();
            animation.kill();

        };
    }, []);

    return (

        <>
            <div className="h-fit w-screen">
                <div id="page" className='md:h-screen w-10 h-fit'>
                    <div className="slide text-black">
                        <img preload src="src\assets\image\charbhar.avif" alt="" />
                        <div className="text"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GameList