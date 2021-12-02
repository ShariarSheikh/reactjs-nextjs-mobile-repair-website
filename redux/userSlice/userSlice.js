import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const login = await axios.post(
        "https://stormy-woodland-67379.herokuapp.com/auth/user/login",
        user
      );

      if (login?.data) {
        const u = {
          name: login?.data?.name,
          email: login?.data?.email,
          profileImg: login?.data?.profileImg,
          token: login?.data?.token,
        };
        cookies.set("u", u, { path: "/" });
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "signup/signUpUser",
  async (user, { rejectWithValue }) => {
    try {
      const signup = await axios.post(
        "https://stormy-woodland-67379.herokuapp.com/auth/user/register",
        user
      );
      if (signup?.data) {
        const u = {
          name: signup?.data?.name,
          email: signup?.data?.email,
          profileImg: signup?.data?.profileImg,
          token: signup?.data?.token,
        };
        cookies.set("u", u, { path: "/" });
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: { isOpen: false, type: "login" },
    status: "",
    error: "",
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
    logOutUser: (state, action) => {
      cookies.remove("u");
      state.status = "";
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    //
    [signUpUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [signUpUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { modalLogin, modalSignup, closeModal, logOutUser } =
  modalSlice.actions;

export const joinModal = (state) => state.joinModal;

export default modalSlice.reducer;
