import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../PlayerType/PlayerType";

export interface PlayersProps {
  selectedPlayers: PlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin }: PlayersProps) => {
  const handleRemovePlayer = (playerName: string) => {
    const playerToRemove = selectedPlayers.find(
      (player) => player.playerName === playerName
    );

    if (!playerToRemove) return;

    setSelectedPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.playerName !== playerName)
    );

    setCoin((prevCoin) => prevCoin + playerToRemove.price);
  };

  return (
    <div className="space-y-4">
      {selectedPlayers.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-base-300 bg-base-100/80 p-10 text-center text-base-content/70 shadow-inner">
          No players selected yet.
        </div>
      ) : (
        selectedPlayers.map((player) => (
          <div
            key={player.playerName}
            className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-base-300 bg-base-100 p-4 shadow-lg shadow-base-300/20 md:flex-row"
          >
            <div className="flex items-center gap-4">
              <img
                src={player.playerImg}
                alt={player.playerName}
                className="h-20 w-20 rounded-2xl object-cover shadow-md"
              />

              <div>
                <h3 className="text-xl font-bold text-base-content">{player.playerName}</h3>
                <p className="text-sm text-base-content/70">{player.origin}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="badge badge-primary">{player.playerType}</span>
                  <span className="badge badge-outline">${player.price}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-sm text-base-content/80">
                <p>
                  Batting: <strong>{player.battingStyle}</strong>
                </p>
                <p>
                  Bowling: <strong>{player.bowlingStyle}</strong>
                </p>
              </div>

              <button
                onClick={() => handleRemovePlayer(player.playerName)}
                className="btn btn-error btn-sm rounded-xl px-4"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
