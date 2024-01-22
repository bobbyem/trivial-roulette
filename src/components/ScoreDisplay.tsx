import { Player } from "../features/slicesTemp/PlayerSlice";
import ScoreItem from "./ScoreItem";

type props = {
  players: Player[];
};
function ScoreDisplay(props: props) {
  const { players } = props;
  return (
    <ul className="scroll w-300 gap-1 w-full flex-column direction-column ol-1 p-top-1 b-round">
      {players
        ? players.map((player, index) => (
            <ScoreItem key={index} player={player} />
          ))
        : null}
    </ul>
  );
}

export default ScoreDisplay;
