import { createSlice } from "@reduxjs/toolkit";

const gadgetsModalSlice = createSlice({
  name: "gadgets",
  initialState: {
    modal: false,
    data: {},
  },

  reducers: {
    openGadgets: (state, action) => {
      state.data = action.payload;
      state.modal = true;
    },
    closeGadgets: (state, action) => {
      state.modal = false;
      state.data = {};
    },
  },
});

export const { openGadgets, closeGadgets } = gadgetsModalSlice.actions;

export const gadgetsModal = (state) => state.gadgetsModal;

export default gadgetsModalSlice.reducer;
