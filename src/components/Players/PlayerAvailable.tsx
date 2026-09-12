import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../PlayerType/PlayerType";
import PlayerCard from "./PlayerCard";

export interface PlayersProps {
  players: PlayerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

const PlayerAvailable = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayersProps) => {
  console.log(players, "Players From Available players");

  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {players.map((player: PlayerType, index: number) => {
        return (
          <PlayerCard
            key={`${player.playerName}-${index}`}
            player={player}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        );
      })}
    </div>
  );
};

export default PlayerAvailable;