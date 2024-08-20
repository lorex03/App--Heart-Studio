import React, { useState, useEffect } from 'react';

function Typewriter({text, delay, onTypingComplete}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      onTypingComplete()
    }
  }, [currentIndex, delay, text, onTypingComplete]);

  return <span>{displayText}</span>;
}

export default Typewriter;