import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appSlice from './reducers/appSlice';

export const store = configureStore({
	reducer: {
		app: appSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
