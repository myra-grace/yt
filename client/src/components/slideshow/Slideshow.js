import React, { useEffect, useState, useRef } from "react";

const Slideshow = (props) => {
  const [square, setSquare] = useState();
  useEffect(() => {
    if (props.vw >= props.vh) {
      setSquare(props.vh - 300);
    } else {
      setSquare(props.vw - 100);
    }
  }, []);

  return (
    <div className="slider">
      <img
        src={props.psrc}
        alt={props.palt}
        width={square}
        height={square}
      />
    </div>
  );
};

export default Slideshow;
