import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
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
	'user/checkLocalCredentials',
	() => {
		const userRaw = localStorage.getItem('user');

		if (!userRaw) return {error: true, payload: 'ERROR'};

		const user = JSON.parse(userRaw);
		if (!user) return {error: true, payload: 'ERROR'};

		return {
			payload: user
		};
	}
);