"use client";

import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";

const TestimonialTooltip = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);

    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );

    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );

    const handleMouseMove = (event) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
    };

    const people = [
        {
            id: 1,
            name: "Rajiv Choudhary",
            designation: "Android Developer",
            image:
                "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/Rajiv Choudhary.avif",
        },
        {
            id: 2,
            name: "Vikas Choudhary",
            designation: "Product Manager",
            image:
                "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/Vikash Choudhary.avif",
        },
        {
            id: 3,
            name: "Sunita Devanda",
            designation: "Marketing Manager",
            image:
                "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/sunita_devanda.avif",
        },
        {
            id: 4,
            name: "Sanjay Yadav",
            designation: "Associate User Interface Designer",
            image:
                "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/sanjay_yadav.avif",
        },
        {
            id: 5,
            name: "Kiran Yadav",
            designation: "Human Resources Manager",
            image:
                "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/kiran Yadav.avif",
        },
        {
            id: 6,
            name: "Raj Choudhary",
            designation: "CEO",
            image:
                "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/Raj Choudhary.avif",
        },
       
    ];

    return (
        <div className="flex justify-center items-center h-fit w-full"> 

            <div className="flex flex-row items-center justify-center  w-full">
                {people.map((testimonial, idx) => (
                    <div
                        className="-mr-4 relative group"
                        key={testimonial.name}
                        onMouseEnter={() => setHoveredIndex(testimonial.id)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence mode="wait">
                            {hoveredIndex === testimonial.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 10,
                                        },
                                    }}
                                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                    style={{
                                        translateX: translateX,
                                        rotate: rotate,
                                        whiteSpace: "nowrap",
                                    }}
                                    className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black shadow-black z-50 shadow-md px-4 py-2"
                                >
                                    <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                                    <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                    <div className="font-bold text-white relative z-30 text-base">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-white text-xs">
                                        {testimonial.designation}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <img
                            onMouseMove={handleMouseMove}
                            height={100}
                            width={100}
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="object-cover !m-0 !p-0 object-top rounded-full h-12 w-12 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialTooltip;
