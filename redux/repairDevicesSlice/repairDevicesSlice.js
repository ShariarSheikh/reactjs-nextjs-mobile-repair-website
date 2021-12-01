import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const repairDevicesFetch = createAsyncThunk(
  "repairDevices/repairDevicesFetch",
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_GET_REPAIR_DEVICE
    );
    return response.data;
  }
);

export const repairDevicesSlice = createSlice({
  name: "repairDevices",
  initialState: {
    repairDevicesData: null,
    status: null,
    error: null,
  },

  reducers: {},
  extraReducers: {
    [repairDevicesFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [repairDevicesFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.repairDevicesData = action.payload;
    },
    [repairDevicesFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default repairDevicesSlice.reducer;
