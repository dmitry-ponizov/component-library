import { IExampleState } from "./types";

const initialState = {
  fetch: false,
  error: "test",
};

const exampleReducer = (state: IExampleState = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default exampleReducer;
