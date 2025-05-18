import React, { useEffect, useState } from "react";
import "./HeartAnimation.css";

const HeartAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); // display the animation for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="heart-animation-overlay">
      <div className="big-heart"></div>
      <div className="small-hearts">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx} className="small-heart"></div>
        ))}
        {/* Added bubbling text "Rediet" */}
        <div className="rediet-bubble">Rediet</div>
      </div>
    </div>
  );
};

export default HeartAnimation;
