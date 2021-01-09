import * as React from "react";
import { useStyles } from "./styles";
import { Provider as StoreProvider } from "react-redux";
import ProjectDetails from "./components/ProjectDetails";
import store from "../store/redux-og";

const DocumentAssetManagement = (props: any) => {
  const classes = useStyles();
  return (
    <StoreProvider store={store}>
      <section className={classes.root} id="mainAuth">
        Hello from DAM
        <ProjectDetails dispatch={props.dispatch} />
      </section>
    </StoreProvider>
  );
};

export default DocumentAssetManagement;
