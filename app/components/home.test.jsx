import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "./home";

test("Test the home component", () => {
  render(<Home />);
  expect(screen.getByText("Hello!")).toBeDefined();
});
