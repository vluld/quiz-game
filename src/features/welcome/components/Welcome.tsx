import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Who wants to be a millionaire?</p>
        <Link to="/who-wants-to-be-a-millionaire">Start</Link>
      </header>
    </div>
  );
}

export default Welcome;
