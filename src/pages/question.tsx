import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../features/store";
import { Category } from "../utils/Interfaces";

function Question() {
  const { currentQuestion } = useSelector(
    (state: RootState) => state.questionReducer
  );
  const { gameRunning } = useSelector((state: RootState) => state.appReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentQuestion || !gameRunning) {
      navigate("/game");
    }
  }, [currentQuestion]);

  if (currentQuestion) {
    return (
      <div className="page align-items-center fade-in">
        <div className="w-full h-full">
          <div className="h-full align-items-center flex-column justify-content-between">
            <h1
              className={`${currentQuestion.category} w-full m-0 p-1 text-center text-uppercase`}
            >
              {currentQuestion.category}
            </h1>
            <div className="flex-column">
              <p className="text-center text-l">{currentQuestion.question}</p>
            </div>
            <button
              className="w-300 m-bottom-1 p-1 text-l framework"
              onClick={() => {
                navigate("/answer");
              }}
            >
              See Answer
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Question;
