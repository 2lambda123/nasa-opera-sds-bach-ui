import React from "react";
import { render } from "@bach/test-utils";
import "@testing-library/jest-dom";

import Profile from "@bach/components/Profile"

describe("Profile", () => {
  test("renders Profile component", () => {
    render(<Profile />);
  });
});
