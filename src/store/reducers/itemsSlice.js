import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { items: [], item: {}, isLoading: false, error: null };
export const getItems = createAsyncThunk(
  "items/getItems",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:3005/shop");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getItem = createAsyncThunk(
  "items/getItem",
  async (itemID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`http://localhost:3005/shop/${itemID}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [getItems.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get item page
    [getItem.fulfilled]: (state, action) => {
      state.item = action.payload;
    },
    [getItem.rejected]: () => {},
  },
});
export const itemsReducer = itemsSlice.reducer;
export const itemsActions = itemsSlice.actions;
