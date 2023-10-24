import { render, screen } from "@testing-library/react";
import Welcome from "../Welcome";

test("renders welcome page", () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/millionaire/i);
  expect(linkElement).toBeInTheDocument();
});
