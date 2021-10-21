import { configureStore } from '@reduxjs/toolkit';

import User from './user/user.slice';

export default configureStore({
	reducer: {
		user: User.reducer
	}
});