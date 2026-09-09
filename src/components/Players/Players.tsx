import { use } from "react";
import type { PlayerType } from "../../PlayerType/PlayerType";
import PlayerAvailable from "./PlayerAvailable";

export interface PlayersProps {
  playersPromise: Promise<PlayerType[]>;
}

export const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);

  return (
    <>
    <div className="container mx-auto">

<div className="flex justify-between container mx-auto mt-15 mb-10 ">
        <div className="font-bold text-3xl">
          <h2>Available Players</h2>
        </div>

        <div className="flex gap-1.5">
          <button className="btn btn-neutral">Availabe</button>
          <button className="btn btn-outline">Selected</button>
        </div>

        
      </div>
<PlayerAvailable players={players} />

    </div>
      
    </>
  );
};
