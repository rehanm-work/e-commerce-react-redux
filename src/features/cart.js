import { createSlice } from '@reduxjs/toolkit';

// const initialValue = {
//   id: 0,
//   quantity: 0,
//   title: '',
//   currentPrice: 0,
//   img: '/images/image-product-1-thumbnail.jpg',
// };

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      // Check if Item is in cart already

      const inCart = state.value.find((item) =>
        item.id === action.payload.id ? true : false
      );

      const newValues = state.value.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });

      state.value = inCart ? [...newValues] : [...state.value, { ...item }];
    },
    addToCartOne: (state, action) => {
      const item = action.payload;
      // Check if Item is in cart already

      const inCart = state.value.find((item) =>
        item.id === action.payload.id ? true : false
      );

      const newValues = state.value.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item;
      });

      state.value = inCart ? [...newValues] : [...state.value, { ...item }];
    },
    changeQuantity: (state, action) => {
      const newValues = state.value.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });
      state.value = [...newValues];
    },
    removeItem: (state, action) => {
      const inCart = state.value.find((item) =>
        item.id === action.payload.id ? true : false
      );
      const newValues = state.value.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.value = inCart ? [...newValues] : [...state.value];
    },
  },
});

export const { addToCart, addToCartOne, removeItem, changeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
