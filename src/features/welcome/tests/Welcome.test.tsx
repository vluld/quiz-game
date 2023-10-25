import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { renderApp } from "tests/setup";
import Welcome from "../components/Welcome";

describe("Welcome page", () => {
  test("renders welcome page slogan", () => {
    renderApp(<Welcome />);
    const linkElement = screen.getByText(/millionaire/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders start button on welcome page", () => {
    renderApp(<Welcome />);
    const buttonElement = screen.getByText(/start/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
