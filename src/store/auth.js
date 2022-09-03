import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    user:JSON.parse(localStorage.getItem('user')) ?? false
}

export const auth = createSlice({  
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const val =JSON.stringify(action.payload)
            localStorage.setItem( 'user', val);
            state.user =action.payload

        },
        logout : (state, action) => {
            localStorage.removeItem('user');
            state.user = false
        },


    },
});



export const { login, logout } = auth.actions;
export default auth.reducer;

