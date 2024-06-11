export const Feedback = ({
  good,
  neutral,
  bad,
}) => {
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Bad: {bad}</li>
            <li>Neutral: {neutral}</li>
        </ul>
    );
};