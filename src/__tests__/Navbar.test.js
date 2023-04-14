// @ts-nocheck
import { render } from "@testing-library/react";
import Navbar from "../components/Navbar";
import React from "react";

describe("Navbar", () => {
  it("render Navbar correctly", () => {
    const { getAllByTestId } = render(<Navbar />);
    const navbar = getAllByTestId("navbar");
    expect(navbar).toBeInTheDocument;
  });
});
