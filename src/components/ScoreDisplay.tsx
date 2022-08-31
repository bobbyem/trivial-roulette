import { Player } from "../features/slices/PlayerSlice";
import ScoreItem from "./ScoreItem";

type props = {
  players: Player[];
};
function ScoreDisplay(props: props) {
  const { players } = props;
  return (
    <ul className="p-1 scroll gap-1 w-full flex-column direction-column ol-1">
      {players
        ? players.map((player, index) => <ScoreItem player={player} />)
        : null}
    </ul>
  );
}

export default ScoreDisplay;
