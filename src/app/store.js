import { configureStore } from "@reduxjs/toolkit";
import { tableSlice } from "./slices/table.slice";
import { userSlice } from "./slices/user.slice";

export const store = configureStore({
	reducer: {
		users: userSlice.reducer,
		table: tableSlice.reducer,
	},
});
