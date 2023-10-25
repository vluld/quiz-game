import { screen } from "@testing-library/react";
import { renderApp } from "tests/setup";
import Results from "../Results";

test("renders result page", () => {
  renderApp(<Results />);
  const linkElement = screen.getByText(/millionaire/i);
  expect(linkElement).toBeInTheDocument();
});
