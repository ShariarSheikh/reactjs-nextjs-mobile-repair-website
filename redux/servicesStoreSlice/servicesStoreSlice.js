import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const servicesStoreFetch = createAsyncThunk(
  "servicesStore/servicesStoreFetch",
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_GET_SERVICES_STORE
    );
    return response.data.servicesStore;
  }
);

export const servicesStoreSlice = createSlice({
  name: "repairDevices",
  initialState: {
    servicesStore: [],
    status: null,
    error: null,
  },

  reducers: {},
  extraReducers: {
    [servicesStoreFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [servicesStoreFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.servicesStore = action.payload;
    },
    [servicesStoreFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default servicesStoreSlice.reducer;
