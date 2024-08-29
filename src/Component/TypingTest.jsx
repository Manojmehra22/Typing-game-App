import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const paragraph = `Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.`;

const TypingTest = () => {
  const maxTime = 60;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [mistake, setMistake] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [WPM, setWpm] = useState(0);
  const [CPM, setCPM] = useState(0);
  const inputRef = useRef(null);
  const charRefs = useRef([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const characters = charRefs.current;
    let currentChar = charRefs.current[charIndex];
    let typedChar = e.target.value.slice(-1);
    if (charIndex < characters.length && timeLeft > 0) {
      if (!isTyping) {
        setIsTyping(true);
      }
    }
  };

  return (
    <div className="container">
      <div className="test">
        <input
          type="text"
          className="input-field"
          ref={inputRef}
          onChange={handleChange}
        />
        {paragraph.split("").map((char, index) => (
          <span className="char" ref={(e) => (charRefs.current[index] = e)}>
            {char}
          </span>
        ))}
      </div>
      <div className="result">
        <p>
          Time Left: <strong>{timeLeft}</strong>
        </p>
        <p>
          Mistake:<strong>{mistake}</strong>
        </p>
        <p>
          WPM:<strong>{WPM}</strong>
        </p>
        <p>
          CPM:<strong>{CPM}</strong>
        </p>
        <button className="btn">Try Again</button>
      </div>
    </div>
  );
};

export default TypingTest;
