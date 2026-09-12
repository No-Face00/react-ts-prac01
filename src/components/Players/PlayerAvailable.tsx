import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../PlayerType/PlayerType";
import PlayerCard from "./PlayerCard";

export interface PlayersProps {
  players: PlayerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const PlayerAvailable = ({ players, coin, setCoin }: PlayersProps) => {
  console.log(players, "Players From Available players");

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {players.map((player: PlayerType, index: number) => {
        return (
          <PlayerCard key={`${player.playerName}-${index}`} player={player} coin={coin} setCoin={setCoin} />
        );
      })}
    </div>
  );
};

export default PlayerAvailable;