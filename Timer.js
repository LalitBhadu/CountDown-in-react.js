import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let total_days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${total_days} Days:  ${hours} Hours: ${minutes} Mintues: ${seconds}  Seconds`;
  };
  return (
    <div className="timer">
      <h1>Web Site Is Under Maintenance</h1>

      <h2>We're Launching Soon</h2>
      <h6>{getFormattedTime(time)} </h6>
    </div>
  );
};

export default Timer;
