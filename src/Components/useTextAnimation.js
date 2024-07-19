// useTextAnimation.js
import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useTextAnimation = () => {
    useEffect(() => {
        // Function to break the text into individual words wrapped in spans
        function breakTheText() {
            const mainTextElements = document.getElementsByClassName("mainText");
            const upperTextElements = document.getElementsByClassName("upperText");
            if (upperTextElements.length > 0) {
                const upperTextElement = upperTextElements[0];
                const upperText = upperTextElement.textContent;
                const splitedUpperText = upperText.split(" "); // Split into individual words
                let clutter = "";
                splitedUpperText.forEach(function (elem) {
                    clutter += `<span>${elem} </span>`; // Add a space after each word
                });
                upperTextElement.innerHTML = clutter;
            }
            if (mainTextElements.length > 0) {
                const mainTextElement = mainTextElements[0];
                const mainText = mainTextElement.textContent;
                const splitedmainText = mainText.split(" "); // Split into individual words
                let mainclutter = "";
                splitedmainText.forEach(function (mainelem) {
                    mainclutter += `<span>${mainelem} </span>`; // Add a space after each word
                });
                mainTextElement.innerHTML = mainclutter;
            }
        }

        // Ensure the DOM is ready before accessing elements
        breakTheText();

        // GSAP animation
        gsap.from(".mainText span", {
            y: 70,
            duration: 0.8,
            delay: 0.5,
            opacity: 0,
            stagger: 0.15
        });
        gsap.from(".upperText span", {
            z: 100,
            duration: 0.5,
            delay: 1.5,
            opacity: 0,
            stagger: 0.3
        });
    }, []);
};
