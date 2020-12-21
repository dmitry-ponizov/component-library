import React from "react";
import { render } from "@testing-library/react";

import TestMuiButton from "./";
import { ITestMUIButtonProps } from "./types";

describe("Test Component", () => {
  let props: ITestMUIButtonProps;

  beforeEach(() => {
    props = {
      color: "primary",
    };
  });

  const renderComponent = () => render(<TestMuiButton {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-mui-button-component");

    expect(testComponent).toBeInTheDocument();
  });
});
