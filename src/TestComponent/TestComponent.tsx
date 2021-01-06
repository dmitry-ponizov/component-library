import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";
import ThemeManager from "../theme/ThemeManager";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => {
  return (
    <div
      data-testid="test-component"
      className={`test-component test-component-${theme}`}
    >
      <h1 className="heading">I'm the test componentddd</h1>
    </div>
  );
};

export default TestComponent;
