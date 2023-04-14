// @ts-nocheck
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("render main content message", () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId("main-content");
    expect(element).toBeInTheDocument;
  });
  it("render count value after clicking on button", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("main-button");
    const count = getByTestId("main-count");
    fireEvent.click(button);
    expect(count.innerHTML).toEqual("1");
  });
});
