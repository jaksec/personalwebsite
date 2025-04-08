import { useEffect, useState } from 'react';
import './Typewriter.css'; // or .scss if you're using SCSS setup

const Typewriter = () => {
  const sentences = [
    "Software Engineer.",
    "Developer.",
    "Student.",
    "I build applications.",
    "I create solutions.",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = sentences[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % sentences.length);
        }
      } else {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, sentences]);

  return (
    <div className="who-i-am">
      {text}
      <span className="cursor" />
    </div>
  );
};

export default Typewriter;