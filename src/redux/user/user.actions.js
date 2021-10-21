import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../api/user';

export const signIn = createAsyncThunk(
	'user/signIn',
	async (userData, thunkAPI) => {
		try {
			const response = await UserService.signIn(userData); //instance({ method: 'post', url: userRoutes.AUTH_ROOT + userRoutes.AUTH_SIGNIN, data: userData });

			// todo: remember me button sur la page login
			localStorage.setItem('user', JSON.stringify(response.data));

			return response.data;
		}
		catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const checkLocalCredentials = createAction(
	'user/refreshLocalCredentials',
	() => {
		const userRaw = localStorage.getItem('user');
		if (!userRaw) return;

		const user = JSON.parse(userRaw);
		if (!user) return;

		return {
			payload: user
		};
	}
);