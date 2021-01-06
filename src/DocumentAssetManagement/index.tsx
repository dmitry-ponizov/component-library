import * as React from "react";
import { useStyles } from "./styles";
import { Provider as StoreProvider } from "react-redux";
import configureStore from "../stores";
import ProjectDetails from "./components/ProjectDetails";

const store = configureStore();

const DocumentAssetManagement = () => {
  const classes = useStyles();
  return (
    <StoreProvider store={store}>
      <section className={classes.root} id="mainAuth">
        Hello from DAM
        <ProjectDetails />
      </section>
    </StoreProvider>
  );
};

export default DocumentAssetManagement;
