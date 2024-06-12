import s from "./Options.module.css";

export const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
    return (
    <ul className={s.ulbuttons}>
        <li><button className={s.buttonG}   onClick={() => {
          updateFeedback("good");
        }}>Good</button></li>
        <li><button className={s.buttonN}   onClick={() => {
          updateFeedback("neutral");
        }}>Neutral</button></li>
        <li><button className={s.buttonB}   onClick={() => {
          updateFeedback("bad");
        }}>Bad</button></li>
            <li>
         {totalFeedback > 0 && (
        <button
          className={s.buttonRes}
          onClick={() => {
            resetFeedback();
          }}
        >
          Reset
        </button>
            )}
            </li>
    </ul>)
};