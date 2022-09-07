import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { Player, resetPlayerState } from "../features/slices/PlayerSlice";
import { useDispatch } from "react-redux";
import { resetQuestionState } from "../features/slices/QuestionSlice";
function WinnerModal() {
  const { players } = useSelector((state: RootState) => state.playerReducer);
  const [winner, setWinner] = useState<Player | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    //Check if any of the players has all categories
    const result = players.find((player) => player.completed.length === 6);
    if (result) {
      setWinner(result);
      confetti();
    }
    if (!result && winner) {
      setWinner(null);
    }
  }, [players, winner]);

  if (winner) {
    return (
      <div className="modal flex-column justify-content-center align-items-center grow">
        <h1 className="text-l">🎉</h1>
        <h2>And the winner is</h2>
        <h1 className="text-l">{winner.name}! </h1>
        <button className="html w-full text-l w-300" onClick={() => confetti()}>
          More confetti
        </button>
        <button
          className="javascript w-full text-l w-300 m-top-2"
          onClick={() => {
            dispatch(resetPlayerState());
            dispatch(resetQuestionState());
          }}
        >
          Reset Game
        </button>
      </div>
    );
  }
  return null;
}

export default WinnerModal;
