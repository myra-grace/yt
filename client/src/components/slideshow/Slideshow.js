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
    <div className="slideshow-container">
      <div className="slider">
        <img src="https://i.redd.it/aepphltiqy911.png" alt="Slates for better airflow" width={square} height={square} />
        <img src="https://i.redd.it/aepphltiqy911.png" alt="Graphics mount" width={square} height={square} />
        <img src="https://i.redd.it/aepphltiqy911.png" alt="Small legs" width={square} height={square} />
        <img src="https://i.redd.it/aepphltiqy911.png" alt="Foot props" width={square} height={square} />
        <img src="https://i.redd.it/aepphltiqy911.png" alt="Closeup" width={square} height={square} />
        <img src="https://i.redd.it/aepphltiqy911.png" alt="Pocket feature" width={square} height={square} />
        <img src="https://i.redd.it/aepphltiqy911.png" alt="Back view" width={square} height={square} />
      </div>
    </div>
  );
};

export default Slideshow;
