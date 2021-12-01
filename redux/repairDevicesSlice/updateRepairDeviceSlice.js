import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateRepairDevice = createAsyncThunk(
  "repairDevices/updateRepairDevice",
  async (device) => {
    const response = await axios.patch(
      `${process.env.REACT_APP_GET_REPAIR_DEVICE_UPDATE}${device.id}`,
      device
    );

    response.data.success && alert("Updated successfully");
    return response.data;
  }
);

export const updateRepairDeviceSlice = createSlice({
  name: "update repair device",
  initialState: {
    status: null,
    updateDevice: null,
    openModel: false,
  },

  reducers: {
    openUpdateModelRepair: (state, action) => {
      state.updateDevice = action.payload;
      state.openModel = true;
      state.status = null;
    },
    closeUpdateModelRepair: (state, action) => {
      state.openModel = false;
      state.status = null;
    },
  },
  extraReducers: {
    [updateRepairDevice.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateRepairDevice.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateRepairDevice.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { openUpdateModelRepair, closeUpdateModelRepair } =
  updateRepairDeviceSlice.actions;

export default updateRepairDeviceSlice.reducer;
