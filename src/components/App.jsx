import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";
import { Notification } from "./Notification/Notification";


// const initialState = { good: 0, neutral: 0, bad: 0 };



export const App = () => {
    return (
        <>
            <Description />
            <Feedback />
            <Options />
            <Notification/>
        </>
    )
};