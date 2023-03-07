import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
    username: string
    password: string
    isAuth: boolean
}

const initialState: IUserState = {
    username: 'Admin',
    password: '12345',
    isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logInOut(state) {
            state.isAuth = !state.isAuth
        }
    }
})


export const { logInOut } = userSlice.actions
export default userSlice.reducer