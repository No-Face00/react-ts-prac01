import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../PlayerType/PlayerType";
import PlayerAvailable from "./PlayerAvailable";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
  playersPromise: Promise<PlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);

  const [ButtonType, setButtonType] = useState("Available");

  const handleButtonType = (type: "Available" | "Selected") => {
    setButtonType(type);
  };

  const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);

  return (
    <>
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="mb-8 rounded-3xl border border-white/10 bg-base-200/80 p-4 shadow-xl shadow-base-300/20 backdrop-blur-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                Team Builder
              </p>
              <h2 className="text-3xl font-black tracking-tight text-base-content md:text-4xl">
                {ButtonType === "Available" ? "Available Players" : "Selected Players"}
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-base-300 bg-base-100 p-1.5 shadow-inner">
              <button
                onClick={() => handleButtonType("Available")}
                className={`btn rounded-full px-5 ${
                  ButtonType === "Available"
                    ? "btn-success text-white shadow-lg shadow-success/20"
                    : "btn-ghost"
                }`}
              >
                Available
              </button>

              <button
                onClick={() => handleButtonType("Selected")}
                className={`btn rounded-full px-5 ${
                  ButtonType === "Selected"
                    ? "btn-success text-white shadow-lg shadow-success/20"
                    : "btn-ghost"
                }`}
              >
                Selected ({selectedPlayers.length})
              </button>
            </div>
          </div>
        </div>

        {ButtonType === "Available" ? (
          <PlayerAvailable
            players={players}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setCoin={setCoin}
          />
        )}
      </div>
    </>
  );
};
