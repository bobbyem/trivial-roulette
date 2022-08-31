import { Player } from "../features/slices/PlayerSlice";
import { Category } from "../utils/Interfaces";

function ScoreItem(props: { player: Player }) {
  const { name, completed } = props.player;

  return (
    <>
      <li className="-1 w-full flex-row justify-content-between">
        <p className="pl-1 w-full">{name ? name : null}</p>
        <div className="pl-1 w-full flex-row align-items-center gap-1">
          {completed && completed.length > 0
            ? completed.map((category, index) => (
                <div
                  key={index}
                  className={`${Category[category]} circle w-2r`}
                ></div>
              ))
            : null}
        </div>
      </li>
      <hr className="w-full" />
    </>
  );
}

export default ScoreItem;
