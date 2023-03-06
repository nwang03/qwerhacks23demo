import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [clicks, setClicks] = useState(0);
  const [size, setSize] = useState(200);

  useEffect(() => {
    if (clicks === 0) setSize(200);
    else setSize(size + 10);
  }, [clicks]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Frog size is {size} by {size} pixels
        </h3>
        <img
          src={"https://www.qwerhacks.com/media/frog.svg"}
          onClick={() => setClicks(clicks + 1)}
          width={size}
          height={size}
        />
        <p>You have clicked the frog {clicks} times</p>
        <button onClick={() => setClicks(0)}>Reset</button>
      </header>
    </div>
  );
}

export default App;
