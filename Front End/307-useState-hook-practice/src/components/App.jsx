/** @format */

import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleDateString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleDateString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
