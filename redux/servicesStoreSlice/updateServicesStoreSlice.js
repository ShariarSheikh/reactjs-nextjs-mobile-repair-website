import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateServicesStore = createAsyncThunk(
  "servicesStore/updateServicesStore",
  async (store) => {
    const response = await axios.patch(
      `${process.env.REACT_APP_GET_SERVICES_STORE_UPDATE}${store.id}`,
      store.data
    );
    response.data.success && alert("Updated successfully");
    return response.data;
  }
);

export const servicesStoreUpdateSlice = createSlice({
  name: "update services store",
  initialState: {
    status: null,
    updateStore: null,
    openModel: false,
  },

  reducers: {
    openUpdateServiceStore: (state, action) => {
      state.updateStore = action.payload;
      state.openModel = true;
      state.status = null;
    },
    closeUpdateServiceStore: (state, action) => {
      state.openModel = false;
      state.status = null;
    },
  },
  extraReducers: {
    [updateServicesStore.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateServicesStore.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateServicesStore.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { openUpdateServiceStore, closeUpdateServiceStore } =
  servicesStoreUpdateSlice.actions;

export default servicesStoreUpdateSlice.reducer;
