import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: { isOpen: false, type: "login" },
  },

  reducers: {
    modalLogin: (state, action) => {
      state.modal.isOpen = true;
      state.modal.type = "login";
    },
    modalSignup: (state, action) => {
      state.modal.isOpen = true;
      state.modal.type = "signup";
    },
    closeModal: (state, action) => {
      state.modal.isOpen = false;
    },
  },
});

export const { modalLogin, modalSignup, closeModal } = modalSlice.actions;

export const joinModal = (state) => state.joinModal;

export default modalSlice.reducer;
