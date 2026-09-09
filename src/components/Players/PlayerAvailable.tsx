import type { PlayerType } from "../../PlayerType/PlayerType";

export interface PlayersProps {
  players: PlayerType[];
}

const PlayerAvailable = ({ players }: PlayersProps) => {
  console.log(players, "Players From Available players");

  return (
    <div className="grid grid-cols-3 gap-3 ">
      {players.map((player: PlayerType) => {
        return (
          
            <div className="card bg-base-100 w-96 shadow-sm mb-9">
              <figure>
                <img src={player.playerImg} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
         
        );
      })}
    </div>
  );
};

export default PlayerAvailable;
