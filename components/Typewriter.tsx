

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  pause?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, speed = 150, pause = 2000 }) => {
  const [displayContent, setDisplayContent] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setDisplayContent(
        isDeleting
          ? fullText.substring(0, displayContent.length - 1)
          : fullText.substring(0, displayContent.length + 1)
      );

      setTypingSpeed(isDeleting ? speed / 2 : speed);

      if (!isDeleting && displayContent === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayContent === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayContent, isDeleting, loopNum, speed, pause, texts, typingSpeed]);

  return (
    <span className="font-serif text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nude-600 via-rose-400 to-nude-800 animate-gradient-x">
      {displayContent}
      <span className="animate-blink text-nude-600 ml-1">|</span>
    </span>
  );
};

export default Typewriter;