import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import { Player } from "../features/slicesTemp/PlayerSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGameRunning } from "../features/slicesTemp/AppState";
import { Category } from "../utils/Interfaces";

function Wheel() {
  const { currentPlayer, players } = useSelector(
    (state: RootState) => state.playerReducer
  );
  const { currentQuestion } = useSelector(
    (state: RootState) => state.questionReducer
  );
  const { gameRunning } = useSelector((state: RootState) => state.appReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const player: Player | null = players[currentPlayer];

  useEffect(() => {
    if (gameRunning && currentQuestion) {
      navigate("/question");
    }
  }, [gameRunning, currentQuestion]);

  function startGame(): void {
    setTimeout(() => {
      dispatch(setGameRunning());
    }, 2000);
  }

  return (
    <svg
      viewBox="0 0 480 480"
      width="200"
      height="200"
      version="1.1"
      className={currentQuestion ? `${currentQuestion.category}-spin` : ""}
      onAnimationEnd={() => {
        startGame();
      }}
    >
      <g>
        <g id="svg_1">
          <g id="svg_2" transform="matrix(1,0,0,1,-1.4569,5.42178)">
            <path
              id="svg_3"
              strokeWidth="1.89px"
              stroke="black"
              fill="rgb(235,235,235)"
              d="m300.911,29.935c-38.833,-11.282 -80.075,-11.282 -118.909,0c6.987,24.046 2.451,45.676 -13.606,64.891c-3.903,2.04 -7.719,4.244 -11.438,6.604c-24.669,4.298 -45.669,-2.589 -63,-20.662c-29.188,27.989 -49.809,63.706 -59.455,102.978c24.318,5.973 40.783,20.716 49.395,44.229c-0.185,4.4 -0.185,8.806 0,13.207c-8.612,23.513 -25.077,38.256 -49.395,44.229c9.646,39.272 30.267,74.988 59.455,102.978c17.331,-18.073 38.331,-24.961 63,-20.662c3.719,2.36 7.535,4.563 11.438,6.603c16.057,19.215 20.593,40.845 13.606,64.892c38.834,11.282 80.076,11.282 118.909,0c-6.986,-24.047 -2.45,-45.677 13.607,-64.892c3.903,-2.04 7.719,-4.243 11.438,-6.603c24.668,-4.299 45.668,2.589 63,20.662c29.187,-27.99 49.808,-63.706 59.454,-102.978c-24.317,-5.973 -40.782,-20.716 -49.394,-44.229c0.185,-4.401 0.185,-8.807 0,-13.207c8.612,-23.513 25.077,-38.256 49.394,-44.229c-9.646,-39.272 -30.267,-74.989 -59.454,-102.978c-17.332,18.073 -38.332,24.96 -63,20.662c-3.719,-2.36 -7.535,-4.564 -11.438,-6.604c-16.057,-19.215 -20.593,-40.845 -13.607,-64.891zm-59.454,181.202c12.938,0 23.441,10.503 23.441,23.441c0,12.938 -10.503,23.442 -23.441,23.442c-12.938,0 -23.442,-10.504 -23.442,-23.442c0,-12.938 10.504,-23.441 23.442,-23.441z"
            />
          </g>
          <g id="svg_4" transform="matrix(1,0,0,1,-21.0674,-0.810285)">
            <circle
              id="html"
              strokeWidth="1.89px"
              stroke="black"
              fill="rgb(25,130,196)"
              r="46.794"
              cy="116.074"
              cx="261.511"
              opacity={player.completed.includes(0) ? 1 : "0.1"}
              className={
                currentQuestion && currentQuestion.category === "html"
                  ? "pulse"
                  : ""
              }
            />
          </g>
          <g id="svg_6" transform="matrix(1,0,0,1,-129.646,61.5817)">
            <circle
              id="framework"
              strokeWidth="1.89px"
              stroke="black"
              fill="rgb(255,202,58)"
              r="46.794"
              cy="116.074"
              cx="261.511"
              opacity={player.completed.includes(3) ? 1 : "0.1"}
              className={
                currentQuestion && currentQuestion.category === "framework"
                  ? "pulse"
                  : ""
              }
            />
          </g>
          <g id="svg_8" transform="matrix(1,0,0,1,-129.646,186.366)">
            <circle
              id="backend"
              strokeWidth="1.89px"
              stroke="black"
              fill="rgb(106,76,147)"
              r="46.794"
              cy="116.074"
              cx="261.511"
              opacity={player.completed.includes(4) ? 1 : "0.1"}
              className={
                currentQuestion && currentQuestion.category === "backend"
                  ? "pulse"
                  : ""
              }
            />
          </g>
          <g id="svg_10" transform="matrix(1,0,0,1,-21.0674,249.568)">
            <circle
              id="javascript"
              strokeWidth="1.89px"
              stroke="black"
              fill="rgb(138,201,38)"
              r="46.794"
              cy="116.074"
              cx="261.511"
              opacity={player.completed.includes(1) ? 1 : "0.1"}
              className={
                currentQuestion && currentQuestion.category === "javascript"
                  ? "pulse"
                  : ""
              }
            />
          </g>
          <g id="svg_12" transform="matrix(1,0,0,1,87.5108,187.176)">
            <circle
              id="css"
              strokeWidth="1.89px"
              stroke="black"
              fill="rgb(255,89,94)"
              r="46.794"
              cy="116.074"
              cx="261.511"
              opacity={player.completed.includes(2) ? 1 : "0.1"}
              className={
                currentQuestion && currentQuestion.category === "css"
                  ? "pulse"
                  : ""
              }
            />
          </g>
          <g id="svg_14" transform="matrix(1,0,0,1,89.1314,60.7714)">
            <circle
              id="history"
              strokeWidth="1.89px"
              stroke="black"
              fill="rgb(248,255,19)"
              r="46.794"
              cy="116.074"
              cx="261.511"
              opacity={player.completed.includes(5) ? 1 : "0.1"}
              className={
                currentQuestion && currentQuestion.category === "history"
                  ? "pulse"
                  : ""
              }
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Wheel;
