import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGameStopped } from "../features/slices/AppState";
import { addScore, advanceGame } from "../features/slices/PlayerSlice";
import { addUsed } from "../features/slices/QuestionSlice";
import { RootState } from "../features/store";
import { Category } from "../utils/Interfaces";

function Answer() {
  const { currentQuestion } = useSelector(
    (state: RootState) => state.questionReducer
  );
  const { gameRunning } = useSelector((state: RootState) => state.appReducer);
  const { currentPlayer, players } = useSelector(
    (state: RootState) => state.playerReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentQuestion || !gameRunning) {
      navigate("/game");
    }
  }, [currentQuestion]);

  function handleResult(correct: boolean): void {
    if (correct) {
      const score: number = parseInt(Category[currentQuestion.category]);
      dispatch(addScore(score));
      dispatch(addUsed());
      dispatch(advanceGame());
      dispatch(setGameStopped());
      return;
    }
    //If incorrect
    dispatch(addUsed());
    dispatch(advanceGame());
    dispatch(setGameStopped());
  }

  if (currentQuestion) {
    return (
      <div className="page align-items-center fade-in">
        <div className="w-full h-full">
          <div className="h-full flex-column align-items-center justify-content-between">
            <h1
              className={`${currentQuestion.category} w-full m-0 p-1 text-center text-uppercase`}
            >
              {currentQuestion.category}
            </h1>
            <div className="flex-column">
              <p className="text-center text-l">{currentQuestion.answer}</p>
            </div>
            <p className="text-center text-m">
              Was {players[currentPlayer].name} correct?
            </p>
            <div className="flex-row gap-1 w-300">
              <button
                className="text-l w-full m-bottom-1 p-1 css"
                onClick={() => {
                  handleResult(false);
                }}
              >
                👎
              </button>
              <button
                className="text-l w-full m-bottom-1 p-1 javascript"
                onClick={() => {
                  handleResult(true);
                }}
              >
                👍
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Answer;
