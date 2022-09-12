import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/UserSlice';
import priceReducer from '../features/counter/priceSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    price: priceReducer,
  },
});
