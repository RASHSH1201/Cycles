import React, { useEffect, useState } from 'react';


const Es = () => {
    const text = "E-bike Rentals"; // The text you want to animate
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCharIndex((prevCharIndex) => {
          if (prevCharIndex < text.length) {
            return prevCharIndex + 1;
          } else {
            clearInterval(timer);
            return prevCharIndex;
          }
        });
      }, 50);
  
      return () => clearInterval(timer);
    }, [text.length]);
  
    return (
      <h1 className="title2">
        {text.split("").map((char, index) => (
          <span key={index} className={index < charIndex ? "fade" : ""}>
            {char}
          </span>
        ))}
      </h1>
    );
  };
  
  export default Es;