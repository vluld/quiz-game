import { Route, Routes } from "react-router-dom";
import WhoWantsToBeMillionaire from "../features/quizGame/QuizGame";
import Results from "../features/results/components/Results";
import Welcome from "../features/welcome/components/Welcome";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route
        path="/who-wants-to-be-a-millionaire"
        element={<WhoWantsToBeMillionaire />}
      />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<Welcome />} />
    </Routes>
  );
}

export default AppRoutes;
