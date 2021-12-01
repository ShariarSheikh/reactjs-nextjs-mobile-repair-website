import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createServiceStore = createAsyncThunk(
  "serviceStore/createServiceStore",
  async (data) => {
    const response = await axios.post(
      process.env.REACT_APP_GET_SERVICES_STORE_CREATE,
      data
    );

    response?.data.success && alert("Successfully created");
    return response.data;
  }
);

export const createServiceStoreSlice = createSlice({
  name: "create services store",
  initialState: {
    status: null,
  },

  reducers: {},
  extraReducers: {
    [createServiceStore.pending]: (state, action) => {
      state.status = "pending";
    },
    [createServiceStore.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [createServiceStore.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default createServiceStoreSlice.reducer;
