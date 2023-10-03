import React, { useState, useEffect } from 'react';

const EssayContent = ({ text, delay, handle }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [status, setStatus] = useState(false)



  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => {
        setStatus(true)
        clearTimeout(timeout)
      };
    }
  }, [currentIndex, delay, text]);

  const selectText = () => {
    console.log("selectText", status);
    if (status) {
      console.log('true');
      handle(currentIndex)
      setStatus(false)
    } else {
      console.log('false');
      setStatus(true)
    }
  }

  return <span onClick={selectText} >{currentText}</span>;
};

export default EssayContent;