import WelcomeLogo from "assets/images/handFingerUp.svg";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();
  const handleGoToGame = () => navigate("/who-wants-to-be-a-millionaire");

  return (
    <div className="fullscreen centered diagonal-split welcome__container">
      <div className="welcome__container_item centered">
        <img
          className="welcome__container_image"
          src={WelcomeLogo}
          alt="page logo"
        />
      </div>
      <div className="welcome__container_item centered">
        <p className="welcome__container_slogan">
          Who wants to be <br />a millionaire?
        </p>
        <div className="welcome__container_button">
          <Button onClick={handleGoToGame}>Start</Button>
        </div>
      </div>
    </div>
  );
}

export default Results;
