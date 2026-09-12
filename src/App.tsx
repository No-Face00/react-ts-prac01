import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

import type { PlayerType } from "./PlayerType/PlayerType";
import { Players } from "./components/Players/Players";

const PlayersFetch = async (): Promise<PlayerType[]> => {
  const response = await fetch("/data.json");
  if (!response.ok) {
    throw new Error("Failed to load players");
  }

  return response.json();
};

function App() {
  const [coin, setCoin] = useState(50000);

  const [playersPromise] = useState(PlayersFetch())

  return (
    <>
      <Navbar coin={coin} />
      <Banner />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
      </Suspense>
    </>
  );
}

export default App;
