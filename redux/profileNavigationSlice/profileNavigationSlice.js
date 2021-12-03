import { createSlice } from "@reduxjs/toolkit";

export const profileNavigationSlice = createSlice({
  name: "profile navigation",
  initialState: {
    state: "about",
  },
  reducers: {
    changeNavigationState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { changeNavigationState } = profileNavigationSlice.actions;

export const userProfileNavigation = (state) => state.userProfileNavigation;

export default profileNavigationSlice.reducer;
