import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";
export const graphSlice = createSlice({
  name: "graph",
  initialState: {
    pg: null,
  },
  reducers: {
    changePg: (state, { payload }) => {
      state.pg = payload;
    },
  },
});

export const selectPg = (state: RootState) => state.graphSlice.pg;

export const { changePg } = graphSlice.actions;

export default graphSlice.reducer;
