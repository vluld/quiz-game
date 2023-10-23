import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome page", () => {
  render(<App />);
  const linkElement = screen.getByText(/millionaire/i);
  expect(linkElement).toBeInTheDocument();
});
