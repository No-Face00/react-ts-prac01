import { use, useState } from "react";
import type { PlayerType } from "../../PlayerType/PlayerType";
import PlayerAvailable from "./PlayerAvailable";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
  playersPromise: Promise<PlayerType[]>;
}

export const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);

  const [ButtonType, setButtonType] = useState("Available");

  const handleButtonType = (type : "Available"|"Selected") => {
    setButtonType(type);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between container mx-auto mt-15 mb-10 ">
          <div className="font-bold text-3xl">
            <h2>{ ButtonType === "Available" ? "Available Players": "Selected Players"}</h2>
          </div>

          <div className="flex">
            <button
            onClick={()=> handleButtonType("Available")}
              className={`btn ${ButtonType === "Available" ? "btn-success" : ""} rounded-r-none shadow-none`}
            >
              Available
            </button>

            <button
            onClick={()=> handleButtonType("Selected")}
              className={`btn ${ButtonType === "Selected" ? "btn-success" : ""} rounded-l-none shadow-none`}
            >
              Selected
            </button>
          </div>
        </div>

            {
                ButtonType === "Available" ?<PlayerAvailable players={players} /> : <SelectedPlayers/>
            }

        
      </div>
    </>
  );
};
