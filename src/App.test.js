import React from "react";
import ReactDOM from "react-dom";
import { within } from "@testing-library/dom";
import { App } from "./App";

test("it works", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  const { getByText, getByLabelText } = within(root);

  // expect(getByText("TODOS")).not.toBeNull();
  // expect(getByLabelText("What needs to be done?")).not.toBeNull();
  // expect(getByText("Add #1")).not.toBeNull();

  // Above code can be shortend to
  getByText("TODOS");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});
