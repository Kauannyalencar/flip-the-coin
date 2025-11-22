import "./index.css";
import headCoin from "./assets/heads.svg";
import tailCoin from "./assets/tails.svg";
import Coin from "./componets/Coin";
import { useState } from "react";

function App() {
  const coins = {
    Heads: {
      coin: "Heads",
      src: headCoin,
    },
    Tails: {
      coin: "Tails",
      src: tailCoin,
    },
  };

  const [count, setCount] = useState(0);
  const [side, setside] = useState("Heads");

  const handleFlip = () => {
    const sides = ["Heads", "Tails"];
    const randomSide = sides[Math.floor(Math.random() * 2)];
    setside(randomSide);
    setCount(count + 1);
  };

  const currentCoin = {
    coin: side, 
    src: coins[side].src
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Flip the coin</h1>
          <p>Press the coin or the buttton to flip the coin</p>
        </div>
        <div className="coin">
          <Coin coin={currentCoin.src} alt={currentCoin.coin} />
        </div>
        <button className="flip-btn" onClick={handleFlip}>
          RANDOM
        </button>
        <p className="count-text">Total flips: {count}</p>
      </div>
    </>
  );
}

export default App;
