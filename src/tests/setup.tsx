import { Store, configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { reducer } from "../state/reducer";

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
