import { screen } from "@testing-library/react";
import { renderApp } from "src/tests/setup";
import Welcome from "../Welcome";

test("renders welcome page", () => {
  renderApp(<Welcome />);
  const linkElement = screen.getByText(/millionaire/i);
  expect(linkElement).toBeInTheDocument();
});
