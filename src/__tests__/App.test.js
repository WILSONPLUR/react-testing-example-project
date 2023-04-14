import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders welcome message", () => {
    const { getAllByTestId } = render(<App />);
    const element = getAllByTestId("main-content");
    expect(element).toBeInTheDocument;
  });
});
