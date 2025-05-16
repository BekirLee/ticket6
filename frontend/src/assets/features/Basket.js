import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      //   if (!Array.isArray(state.items)) {
      //     console.warn("basket.items craked...");
      //     state.items = [];
      //   }

      //   const existingProduct = state.items.find((item) => item._id == action.payload._id);

      const findedProduct = state.items.find(
        (item) => item._id == action.payload._id
      );
      console.log(action.payload._id);
      console.log(findedProduct, "find");

      if (!findedProduct) {
        state.items.push({ ...action.payload, count: 1 });
        console.log("1");
      } else {
        findedProduct.count += 1;
        console.log("2");
      }
    },
    removeBasket: (state, action) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addBasket, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// export const basketSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     addBasket: (state, action) => {
//       // Find product by ID
//       const findedProduct = state.items.find((item) => item._id === action.payload._id);
//       console.log(action.payload._id);
//       console.log(findedProduct, "find");

//       if (!findedProduct) {
//         // If the product doesn't exist, add it to the basket
//         state.items.push({ ...action.payload, count: 1 });
//         console.log("1");
//       } else {
//         // If the product exists, increase the count
//         findedProduct.count += 1;
//         console.log("2");
//       }
//     },
//   },
// });

// export const { addBasket } = basketSlice.actions;
// export default basketSlice.reducer;
