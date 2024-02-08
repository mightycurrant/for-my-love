import React from 'react';
import '../App.css';

const Answer = () => {
  
  return (
    <>
        <p id="text-main">YAY &#128158;</p>
        <img id="answer-gif" src={process.env.PUBLIC_URL + '/a.gif'} alt="Second GIF" />
    </>
  );
};

export default Answer;
