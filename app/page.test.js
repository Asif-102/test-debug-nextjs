import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Page from "./page";

test("Page", () => {
  render(<Page />);

  // Test the heading
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
