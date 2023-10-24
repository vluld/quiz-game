import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="diagonal-split">
      <p>Who wants to be a millionaire?</p>
      <Link to="/who-wants-to-be-a-millionaire">Start</Link>
    </div>
  );
}

export default Welcome;
