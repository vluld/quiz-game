import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default App;
