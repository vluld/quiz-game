import { Store, configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { reducer } from "../state/reducer";

export const createStore = (): Store =>
  configureStore({
    reducer,
  });

export function renderApp(children: JSX.Element, store = createStore()) {
  return render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={children} />
        </Routes>
      </Router>
    </Provider>,
  );
}
