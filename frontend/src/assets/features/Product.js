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

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    console.log(id);

    const response = await axios.get(`${port}/${id}`);
    console.log(response);

    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    const response = await axios.post(port, product);
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
  singleProduct: null,
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
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
        console.log(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const id = action.payload;
        state.products = state.products.filter((item) => item._id !== id);
        state.allProducts = state.allProducts.filter((item) => item._id !== id);
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        console.log(action.payload);

        state.allProducts.push(action.payload);
      });
  },
});

export const { searchProduct, sortAZ, sortZA } = productSlice.actions;
export default productSlice.reducer;
