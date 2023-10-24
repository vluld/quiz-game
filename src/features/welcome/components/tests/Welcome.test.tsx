import { screen } from "@testing-library/react";
import Welcome from "../Welcome";
import { renderApp } from "../../../../tests/setup";
import { Route } from "react-router-dom";

test("renders welcome page", () => {
  renderApp(<Welcome />);
  const linkElement = screen.getByText(/millionaire/i);
  expect(linkElement).toBeInTheDocument();
});
