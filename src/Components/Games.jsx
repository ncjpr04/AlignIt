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
    <div id='games'className="slider w-full h-full overflow-hidden" ref={sliderRef}>
      <div className="list flex">
        {[
          { src: "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/img5.avif", title: "AlignIt", type: " Where Every Move Counts", description: "Building board games that dignify the interest of players and continuously improving the gaming experience, making games a part of life.", link: "https://play.google.com/store/apps/dev?id=6071653399714923628" },
          { src: "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/img2.avif", title: "Ludo Offline", type: "No waiting to Roll Dice!", description: "Where friendships are tested, grudges are born, and that one red piece just won't move! Roll the dice, dodge your friend's sneaky moves, and hope the universe is on your side", link: "https://play.google.com/store/apps/details?id=com.alignit.ludo" },
          { src: "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/img1.avif", title: "Bead 16 - Sholo Guti, Bead 12", type: "Master the board, seize victory", description: "Step into the world of 16 Guti, where strategy meets charm! This beloved South-East Asian game lets you hop, capture, and outwit your opponent with just 16 pieces.", link: "https://play.google.com/store/apps/details?id=com.alignit.sixteenbead" },
          { src: "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/img4.avif", title: "Tic Tac Toe Online", type: "Think fast, play smart", description: "Tic Tac Toe also known as Noughts and Crosses Game and XO Game In Iris English is a Pen and paper game. With this app, you don’t need pen and paper to play your beloved Tic Tac Toe With Friends.", link: "https://play.google.com/store/apps/details?id=com.alignit.tictactoe" },
          { src: "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/img3.avif", title: "Shatranj", type: "Master the game of kings", description: "Chess: The ultimate game of strategy where every move counts. Outsmart your opponent, claim your throne!", link: "https://play.google.com/store/apps/details?id=com.alignit.chess" },

        ].map((item, index) => (
          <div className="item flex-shrink-0" key={index}>
            <img src={item.src} alt="" />
            <div className="content p-4">
              <div className="title text-xl font-bold">{item.title}</div>
              <div className="type text-lg">{item.type}</div>
              <div className="description hidden lg:block mt-2 text-sm">
                {item.description}
              </div>
              <div className="buttons mt-4">
                <button className="bg-black flex hover:bg-gray-900 items-center  h-14 lg:h-10 lg:text-lg text-xl text-white  px-4 py-2 rounded-full">
                  <a target='blank' href={item.link} > Download Now! </a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail ">
        {["https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/ludo.avif", "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/solo.avif", "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/tictactoe.avif", "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/shataranj.avif", "https://raw.githubusercontent.com/ncjpr04/AlignIt/main/src/assets/image/logo.avif"].map((src, index) => (
          <div className="item bg-white rounded-xl  " key={index}>
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
