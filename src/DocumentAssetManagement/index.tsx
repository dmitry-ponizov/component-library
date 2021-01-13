import * as React from "react";
import { useStyles } from "./styles";
import { Provider as StoreProvider } from "react-redux";
import ProjectDetails from "./components/ProjectDetails";
import configStore from "../store/config";

const store = configStore();

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
