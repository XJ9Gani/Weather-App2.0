import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, hostName } from "../../const";
import axios from "axios";

export const getCityData = createAsyncThunk(
  "weather/getCityData",
  async (city) => {
    try {
      const response = await axios.get(
        `${hostName}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      return response.data;
    } catch (e) {
      return Promise.reject(e.response ? e.response.data.message : e.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCityData.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(getCityData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCityData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
