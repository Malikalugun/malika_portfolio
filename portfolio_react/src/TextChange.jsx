import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Malika - Frontend Developer + UX Designer",
    "Hi, I'm Anna - Frontend Developer + UX Designer",
    "Enjoy your stay!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[textIndex].substring(0, charIndex));

      if (isForward) {
        setCharIndex((prev) => prev + 1);
      } else {
        setCharIndex((prev) => prev - 1);
      }

      if (charIndex > texts[textIndex].length + 10) {
        setIsForward(false);
      }

      if (charIndex < 1) {
        setIsForward(true);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [charIndex, isForward, textIndex]);

  return (
    <div className="transition ease-in-out duration-300 text-xl font-bold">
      {currentText}
    </div>
  );
};

export default TextChange;
