import React, { useEffect, useState } from 'react';
import '../App.css';
import anime from 'animejs';
import Answer from './Answer';

const Landing = () => {
  useEffect(() => {
    const button = document.getElementById("runaway-btn");

    const animateMove = (element, prop, pixels) =>
      anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc"
      });

    const getRandomNumber = (num) => {
      return Math.floor(Math.random() * (num + 1));
    };

    const handleMouseClick = (event) => {
      const top = getRandomNumber(window.innerHeight - button.offsetHeight);
      const left = getRandomNumber(window.innerWidth - button.offsetWidth);

      animateMove(button, "left", left).play();
      animateMove(button, "top", top).play();
    };

    // Attach event listeners
    button.addEventListener("mouseover", handleMouseClick);
    button.addEventListener("click", handleMouseClick);

    // Cleanup on component unmount
    return () => {
      button.removeEventListener("mouseover", handleMouseClick);
      button.removeEventListener("click", handleMouseClick);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const [isClicked, setClicked] = useState(false);

  function handleButtonClick() {
    setClicked(true);
  };

  return (
    <>
    {isClicked ? 
    <Answer />
    : (
      <>
        <p id="text-main">CZY ZOSTANIESZ MOJĄ WALENTYNKĄ? &#128563;&#128073;&#128072;</p>
        <img id="question-gif" src={process.env.PUBLIC_URL + '/q.gif'} alt="First GIF" />
        <button id="other-btn" onClick={handleButtonClick}>Tak &#129392;</button>
        <button id="runaway-btn">Nie &#128557;</button>
    </>
  )}
  </>
);
}

export default Landing;
