import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Use a manual mock for react-router-dom located in __mocks__
jest.mock("react-router-dom");

test("renders Flashcard Decks heading", async () => {
  render(<App />);
  const heading = await screen.findByText(/Flashcard Decks/i);
  expect(heading).toBeInTheDocument();
});
