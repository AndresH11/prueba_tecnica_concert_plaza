// slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '../../core/types/userType'

interface UserState {
	isLoggedIn: boolean
	user: User | null
}

const initialState: UserState = {
	user: JSON.parse(localStorage.getItem('user') || 'null'),
	isLoggedIn: !!localStorage.getItem('user'),
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login(state, action: PayloadAction<User>) {
			state.user = action.payload
			state.isLoggedIn = true
			localStorage.setItem('user', JSON.stringify(action.payload))
		},
		logout(state) {
			state.user = null
			state.isLoggedIn = false
			localStorage.removeItem('user')
		},
		updateCredentials(state, action: PayloadAction<Partial<User>>) {
			if (state.user) {
				state.user = { ...state.user, ...action.payload }
				localStorage.setItem('user', JSON.stringify(state.user))
			}
		},
	},
})

export const { login, logout, updateCredentials } = userSlice.actions

export default userSlice.reducer
