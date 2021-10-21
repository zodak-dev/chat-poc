import { createSlice } from '@reduxjs/toolkit';

//actions
import { fetchChats } from './chatActions';

const initialState = {
	isLoggedIn: false,
	isFetching: false,
	isSuccess: false,
	isError: false,
	errorMessage: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearState: () => {
			return {
				...initialState
			};
		}
	},
	extraReducers: {
		[fetchChats.fulfilled]: (_, { payload }) => {
			return {
				...payload,
				isLoggedIn: true,
				isFetching: false,
				isSuccess: true
			};
		},
		[fetchChats.rejected]: (state, { payload }) => {
			state.isLoggedIn = false;
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = payload;
		}
	}
});

// export const { clearState } = userSlice.actions;


// export const userSelector = state => state.user;