import {createSlice} from '@reduxjs/toolkit';

//actions
import {signIn} from './user.actions';

const initialState = {
	email: '',
	firstName: '',
	lastName: '',
	role: '',
	token: '',
	isLoggedIn: false
};

export default createSlice({
	name: 'user',
	initialState,
	reducers: {
		checkLocalCredentials: (_, payload) => {
			if (!payload.error) {
				return {
					...payload.payload,
					isLoggedIn: true
				};
			}
		}
	},
	extraReducers: {
		[signIn.fulfilled]: (_, {payload}) => {
			return {
				...payload,
				isLoggedIn: true
			};
		},
		[signIn.rejected]: (_, {payload}) => {
			// todo: push error to notification reducer
			console.error(payload);

			return {
				...initialState
			};
		}
	}
});