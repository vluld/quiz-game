import FingerUpLogo from "assets/images/handFingerUp.svg";
import Button from "components/Button/Button";
import { resetGame } from "features/quizGame/state/quizGameReducerSlice";
import { getEarnedAmount } from "features/quizGame/state/quizGameSelectors";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "state/hooks";

function Results() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const earned = useAppSelector(getEarnedAmount);

  const handleGoToGame = () => {
    dispatch(resetGame());
    navigate("/who-wants-to-be-a-millionaire");
  };

  return (
    <div className="fullscreen centered results__container">
      <div className="results__container_item centered">
        <img
          className="results__container_image"
          src={FingerUpLogo}
          alt="page logo"
        />
      </div>
      <div className="results__container_item centered">
        <div>
          <p className="results__container_result">Total score:</p>
          <p className="results__container_slogan">{`$${earned.toLocaleString(
            "en-US",
          )} earned`}</p>
        </div>
        <div className="results__container_button">
          <Button onClick={handleGoToGame}>Try again</Button>
        </div>
      </div>
    </div>
  );
}

export default Results;
