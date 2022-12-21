import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AppState {
	value: number;
}

const initialState: AppState = {
	value: 0,
};

export const AppSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		action: (state, action: PayloadAction<number>) => {},
	},
});

export default AppSlice.reducer;
