import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ScoreDisplay from "../components/ScoreDisplay";
import { RootState } from "../features/store";

function Game() {
  const { players, currentPlayer } = useSelector(
    (state: RootState) => state.playerReducer
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (players.length < 1) {
      navigate("/players");
    }
  }, [players]);

  return (
    <div className="page align-items-center justify-content-between">
      <ScoreDisplay players={players} />
      <h2>It's {players ? players[currentPlayer].name : null}s turn</h2>
      <button className="m-top-1 m-bottom-1 p-1 w-300 bg-acc1">Spin</button>
    </div>
  );
}

export default Game;
