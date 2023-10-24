import WelcomeLogo from "assets/images/handFingerUp.svg";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const handleGoToGame = () => navigate("/who-wants-to-be-a-millionaire");

  return (
    <div className="fullscreen centered diagonal-split welcome__container">
      <div className="welcome__container_item centered">
        <img src={WelcomeLogo} alt="page logo" />
      </div>
      <div className="welcome__container_item centered">
        <p className="welcome__container_slogan">
          Who wants to be <br />a millionaire?
        </p>

        <Button onClick={handleGoToGame} variant="desktop">
          Start
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
