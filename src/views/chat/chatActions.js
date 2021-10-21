import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../api';

const userRoutes = Object.freeze({
	CHAT_ROOT: '/????',
	CHAT_FETCH: '/????'
});

export const fetchChats = createAsyncThunk(
	'chat/fetch',
	async (userData, thunkAPI) => {
		try {
			const response = await instance({ method: 'post', url: userRoutes.CHAT_ROOT + userRoutes.CHAT_FETCH, data: userData });

			return response.data;
		}
		catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);