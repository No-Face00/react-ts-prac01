import { useState, type Dispatch, type SetStateAction } from 'react';
import type { PlayerType } from '../../PlayerType/PlayerType';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface PlayerCardProps {
  player: PlayerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const PlayerCard = ({ player, coin, setCoin }: PlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    setIsSelected(true);
    const currentCoin = coin - player.price;
    
    
    if (currentCoin >= 0){
      setCoin(currentCoin);
    toast.success(`Successfully Bought ${player.playerName} `)
    }

    else {toast.warn("Coin is not enough")}

  };


  return (
    <div
      key={player.playerName}
      className="group w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-72 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4">
          <span className="badge badge-primary px-4 py-3 font-semibold shadow-lg">
            {player.playerType}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-4 left-5 text-white">
          <div className="flex items-center gap-2">
            <FaUser className="text-sm" />

            <h2 className="text-xl font-bold">{player.playerName}</h2>
          </div>
        </div>
      </div>

      <div className="card-body p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-base-content/50">Origin</p>
            <p className="font-semibold">{player.origin}</p>
          </div>

          <div className="rounded-lg bg-base-200 px-3 py-2 text-sm font-medium">🏏 Cricket</div>
        </div>

        <div className="divider my-1" />

        <div>
          <p className="mb-3 text-xs uppercase tracking-wider text-base-content/50">Playing Style</p>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Batting</p>
              <p className="mt-1 text-sm font-semibold">{player.battingStyle}</p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Bowling</p>
              <p className="mt-1 text-sm font-semibold">{player.bowlingStyle}</p>
            </div>
          </div>
        </div>

        <div className="divider my-1" />

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-base-content/50">Player Price</p>
            <p className="mt-1 text-2xl font-extrabold text-primary">${player.price.toLocaleString()}</p>
          </div>

          <button 
          onClick={()=>handleSelectPlayer()}
          disabled={isSelected === true ? true :false }
          className="btn btn-primary rounded-xl px-6 shadow-md transition-all hover:scale-105">
            {isSelected ? 'Bought' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
