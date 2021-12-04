import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const servicesStoreFetch = createAsyncThunk(
  "servicesStore/servicesStoreFetch",
  async () => {
    const response = await axios.get(
      "https://stormy-woodland-67379.herokuapp.com/api/service-stores/get"
    );
    return response.data.servicesStore;
  }
);

export const servicesStoreSlice = createSlice({
  name: "repairDevices",
  initialState: {
    servicesStoreData: [],
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
      state.servicesStoreData = action.payload;
    },
    [servicesStoreFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const servicesStore = (state) => state.servicesStore;

export default servicesStoreSlice.reducer;
