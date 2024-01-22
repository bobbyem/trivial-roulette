import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ScoreDisplay from "../components/ScoreDisplay";
import Wheel from "../components/Wheel";
import { getQuestions } from "../features/slicesTemp/QuestionSlice";
import { RootState } from "../features/store";

function Game() {
  const { players, currentPlayer } = useSelector(
    (state: RootState) => state.playerReducer
  );
  const { currentQuestion } = useSelector(
    (state: RootState) => state.questionReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (players.length < 1) {
      navigate("/players");
    }
  }, [players]);

  if (players.length > 0) {
    return (
      <div className="page align-items-center justify-content-between fade-in">
        <ScoreDisplay players={players} />
        <h2>It's {players ? players[currentPlayer].name : null}s turn</h2>
        <Wheel />
        <button
          className="m-top-1 text-l m-bottom-1 p-1 w-300 bg-acc1"
          onClick={() => {
            dispatch(getQuestions());
          }}
          autoFocus
          disabled={currentQuestion ? true : false}
        >
          Spin
        </button>
      </div>
    );
  }
  return null;
}

export default Game;
