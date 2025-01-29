import React, { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  speed: number;
  eraseSpeed?: number;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, speed, eraseSpeed = speed, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];

    if (isErasing) {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, eraseSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsErasing(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    } else {
      if (charIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[charIndex]);
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsErasing(true);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isErasing, currentIndex, texts, speed, eraseSpeed, delay]);

  return <p className="typewriter">{displayedText}</p>;
};

export default Typewriter;
