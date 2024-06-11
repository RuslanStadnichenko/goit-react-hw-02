import s from "./Options.module.css";

export const Options = () => {
    return (
    <ul className={s.ulbuttons}>
        <li><button className={s.button}>Good</button></li>
        <li><button className={s.button}>Neutral</button></li>
        <li><button className={s.button}>Bad</button></li>
        <li><button className={s.buttonRes}>Reset</button></li>
    </ul>)
};