import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import 'tailwindcss/tailwind.css';

const Marquee = () => {
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const marqueeRef = useRef(null);

    useEffect(() => {
        const start = () => {
            let currentScroll = 0;

            const tween = gsap.to(".marque_part", {
                xPercent: -103,
                duration: 5,
                repeat: -1,
                ease: "none",
            });



            gsap.set(".marque_inner", { xPercent: -50 });

            const onScroll = () => {
                const scrollY = window.pageYOffset;
                const scrollingDown = scrollY > currentScroll;
                setIsScrollingDown(scrollingDown);
                gsap.to(tween, {
                    timeScale: scrollingDown ? 1 : -1,
                });
                currentScroll = scrollY;
            };

            window.addEventListener("scroll", onScroll);

            return () => {
                window.removeEventListener("scroll", onScroll);
                tween.kill();
            };
        };

        start();
    }, []);

    return (
        <section className="marque border-y-[#00aeff] border-[1px] text-black mb-10  bg-[#ddf4ffc7] " ref={marqueeRef}>
            <div className="marque_inner flex ">

                <div className="marque_part flex-none text-black hover:text-[#1473b8]" >
                    <img
                        className={`arrow ${isScrollingDown ? 'rotate-180' : 'rotate-0'}`}
                        src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/arrow.svg"
                        alt="arrow"
                    />
                    Play. Discover. Conquer. Repeat.

                </div>
                <div className="marque_part flex-none text-black hover:text-[#bf2b39]" >
                    <img
                        className={`arrow ${isScrollingDown ? 'rotate-180' : 'rotate-0'}`}
                        src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/arrow.svg"
                        alt="arrow"
                    />
                    Play. Discover. Conquer. Repeat.

                </div>
                <div className="marque_part flex-none text-black hover:text-[#1473b8]" >
                    <img
                        className={`arrow ${isScrollingDown ? 'rotate-180' : 'rotate-0'}`}
                        src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/arrow.svg"
                        alt="arrow"
                    />
                    Play. Discover. Conquer. Repeat.

                </div>
                <div className="marque_part flex-none text-black hover:text-[#bf2b39]" >
                    <img
                        className={`arrow ${isScrollingDown ? 'rotate-180' : 'rotate-0'}`}
                        src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/arrow.svg"
                        alt="arrow"
                    />
                    Play. Discover. Conquer. Repeat.

                </div>
                <div className="marque_part flex-none text-black hover:text-[#1473b8]" >
                    <img
                        className={`arrow ${isScrollingDown ? 'rotate-180' : 'rotate-0'}`}
                        src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/arrow.svg"
                        alt="arrow"
                    />
                    Play. Discover. Conquer. Repeat.

                </div>
                <div className="marque_part flex-none text-black hover:text-[#bf2b39]" >
                    <img
                        className={`arrow ${isScrollingDown ? 'rotate-180' : 'rotate-0'}`}
                        src="https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/arrow.svg"
                        alt="arrow"
                    />
                    Play. Discover. Conquer. Repeat.
                </div>

            </div>
        </section>
    );
};

export default Marquee;
