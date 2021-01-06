import * as React from "react";
import { useStyles } from "./styles";
import { Provider as StoreProvider } from "react-redux";
import ProjectDetails from "./components/ProjectDetails";
import exampleReducer from "../store/example/reducer";
import { createStore } from "redux";

const store = createStore(exampleReducer);

const DocumentAssetManagement = () => {
  console.log(store);
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
