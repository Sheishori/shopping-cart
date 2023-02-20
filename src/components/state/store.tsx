import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
