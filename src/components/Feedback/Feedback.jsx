export const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Bad: {bad}</li>
            <li>Neutral: {neutral}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedback}%</li>
        </ul>
    );
};