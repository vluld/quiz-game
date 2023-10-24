import { Route, Routes } from "react-router-dom";
import Welcome from "../features/welcome/components/Welcome";
import WhoWantsToBeMillionaire from "../features/quizGame/QuizGame";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route
        path="/who-wants-to-be-a-millionaire"
        element={<WhoWantsToBeMillionaire />}
      />
      <Route path="*" element={<Welcome />} />
    </Routes>
  );
}

export default AppRoutes;
