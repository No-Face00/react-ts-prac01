import { type Dispatch, type SetStateAction } from 'react';
import type { PlayerType } from '../../PlayerType/PlayerType';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface PlayerCardProps {
  player: PlayerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayerCardProps) => {
  const isSelected = selectedPlayers.some(
    (selectedPlayer) => selectedPlayer.playerName === player.playerName
  );

  const handleSelectPlayer = () => {
    if (isSelected) {
      toast.warn(`${player.playerName} is already selected.`);
      return;
    }

    const currentCoin = coin - player.price;

    if (currentCoin >= 0) {
      setCoin(currentCoin);
      setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
      toast.success(`Successfully Bought ${player.playerName}`);
    } else {
      toast.warn("Coin is not enough");
    }
  };
    
  


  return (
    <div
      key={player.playerName}
      className="group w-full overflow-hidden rounded-[28px] border border-base-300/80 bg-base-100 shadow-lg shadow-base-300/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative h-72 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="badge badge-primary px-4 py-3 text-xs font-bold uppercase tracking-wider shadow-lg">
            {player.playerType}
          </span>
          <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            🏏 Cricket
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <FaUser className="text-sm" />
            </span>
            <h2 className="text-xl font-bold">{player.playerName}</h2>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-base-content/50">Origin</p>
            <p className="mt-1 font-semibold">{player.origin}</p>
          </div>
          <div className="rounded-xl bg-base-200 px-3 py-2 text-sm font-medium text-base-content/80">
            ${player.price.toLocaleString()}
          </div>
        </div>

        <div className="divider my-0" />

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-base-200 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-base-content/50">Batting</p>
            <p className="mt-2 text-sm font-bold">{player.battingStyle}</p>
          </div>

          <div className="rounded-2xl bg-base-200 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-base-content/50">Bowling</p>
            <p className="mt-2 text-sm font-bold">{player.bowlingStyle}</p>
          </div>
        </div>

        <button
          onClick={() => handleSelectPlayer()}
          disabled={isSelected}
          className={`btn w-full rounded-2xl px-6 text-base font-semibold transition-all ${
            isSelected
              ? "btn-disabled bg-success/20 text-success-content border-success/20"
              : "btn-primary shadow-lg shadow-primary/20 hover:scale-[1.01]"
          }`}
        >
          {isSelected ? "Bought" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
