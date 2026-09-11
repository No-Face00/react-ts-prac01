import { FaUser } from "react-icons/fa";
import type { PlayerType } from "../../PlayerType/PlayerType";
import PlayerCard from "./PlayerCard";

export interface PlayersProps {
  players: PlayerType[];
}

const PlayerAvailable = ({ players }: PlayersProps) => {
  console.log(players, "Players From Available players");

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {players.map((player: PlayerType, index: number) => {
        return (
          <PlayerCard key={`${player.playerName}-${index}`} player={player} />
        );
      })}
    </div>
  );
};

export default PlayerAvailable;