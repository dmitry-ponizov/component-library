import * as React from "react";
import Button from "@material-ui/core/Button";
import { ITestMUIButtonProps } from "./types";
import useStyles from "./styles";

const TestMUIButton: React.FunctionComponent<ITestMUIButtonProps> = ({
  color,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        data-testid="test-mui-button-component"
        variant="contained"
        color={color}
      >
        Primary
      </Button>
    </div>
  );
};

export default TestMUIButton;
