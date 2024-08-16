import React, { useState, useEffect, useRef } from 'react';
import './Games.css'; // Ensure you have this CSS file linked
import Home from './Home';
const Games = () => {
  const [direction, setDirection] = useState('');
  const sliderRef = useRef(null);

  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    const sliderList = slider.querySelector('.list');
    const thumbnail = slider.querySelector('.thumbnail');
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add('next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add('prev');
    }

    slider.addEventListener(
      'animationend',
      () => {
        slider.classList.remove(direction);
      },
      { once: true }
    );
  };

  return (
    <div className="slider w-full h-full overflow-hidden" ref={sliderRef}>
      <div className="list flex">
        {[
          { src: "src/assets/image/img5.jpg", title: "Game 1", type: "Sub heading 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut." },
          { src: "src/assets/image/img2.jpg", title: "Game 2", type: "Sub heading 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut." },
          { src: "src/assets/image/img1.jpg", title: "Game 1", type: "Sub heading 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut." },
          { src: "src/assets/image/img4.jpg", title: "Game 3", type: "Sub heading 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut." },
          { src: "src/assets/image/img3.jpg", title: "Game 4", type: "Sub heading 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut." },
          
        ].map((item, index) => (
          <div className="item flex-shrink-0" key={index}>
            <img src={item.src} alt="" />
            <div className="content p-4">
              <div className="title text-xl font-bold">{item.title}</div>
              <div className="type text-lg">{item.type}</div>
              <div className="description mt-2 text-sm">
                {item.description}
              </div>
              {/* <div className="button mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">SEE MORE</button>
          </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail ">
        {["src/assets/image/ludo.webp",  "src/assets/image/solo.webp","src/assets/image/tictactoe.webp","src/assets/image/shataranj.webp", "src/assets/image/logo.jpg"].map((src, index) => (
          <div className="item   " key={index}>
            <img src={src} alt="" className="w-full h-full  object-cover" />
          </div>
        ))}
      </div>
      <div className="nextPrevArrows flex justify-between">
        <button className="prev text-2xl" onClick={() => moveSlider('prev')}>
          {'<'}
        </button>
        <button className="next text-2xl" onClick={() => moveSlider('next')}>
          {'>'}
        </button>
      </div>
    </div>

  );
};

export default Games;
