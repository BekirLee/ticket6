import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const port = "http://localhost:3000/api/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(port);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const response = await axios.delete(`${port}/${id}`);
    return id;
  }
);

const initialState = {
  products: [],
  allProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.products = state.allProducts.filter((product) =>
        product.name.toLowerCase().includes(action.payload.trim().toLowerCase())
      );
    },
    sortAZ: (state, action) => {
      state.products = [...state.products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    sortZA: (state, action) => {
      state.products = [...state.products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.allProducts = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const id = action.payload;
        state.products = state.products.filter((item) => item._id !== id);
        state.allProducts = state.allProducts.filter((item) => item._id !== id);
      });
  },
});

export const { searchProduct, sortAZ, sortZA } = productSlice.actions;
export default productSlice.reducer;
