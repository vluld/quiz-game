import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { store } from "../state/store";
import { Store, configureStore } from "@reduxjs/toolkit";
import { reducer } from "../state/reducer";
import { render } from "@testing-library/react";

export const createStore = (): Store =>
  configureStore({
    reducer,
  });

export function renderApp(children: JSX.Element, store = createStore()) {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={children} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  );
}
