// @ts-nocheck

import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  getExampleData: [],
});

export const CompaniesTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetch: false,
  error: "test",
  data: [],
});

/* ------------- Reducers ------------- */
export const getExampleData = (state) => state.merge({ fetch: false });

/* ------------- Hookup Reducers To Types ------------- */

export const exampleReducer = createReducer(INITIAL_STATE, {
  [Types.GET_EXAMPLE_DATA]: getExampleData,
});
