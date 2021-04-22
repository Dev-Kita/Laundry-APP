import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    password: "",
    token: "",
    // isFetching: false,
    // isSuccess: false,
    // isError: false,
    // errorMessage: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState : initialState,
    reducers: {
        login:(state,action: PayloadAction<any>)=>{
            state.token = "123";
        }
    }
})

export const {login} = userSlice.actions
export default userSlice.reducer