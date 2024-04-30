import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        userData: null,
        didTryAutoLogin: false,
        isNewUser: false,

    },
    reducers: {
        authenticate: (state, action) => {
            const { payload } = action;
            state.token = payload.token;
            state.userData = payload.userData;
            state.isNewUser = payload.isNewUser; 
            state.didTryAutoLogin = true;
            
        },
        setDidTryAutoLogin: (state, action) => {
             
            state.didTryAutoLogin = true;
           
            
            
        },
        setNewUser: (state, action) => {
            const { payload } = action;
            state.isNewUser = payload.isNewUser;
        },

        logout: (state, action) => {
            state.token = null
            state.userData = null
            state.didTryAutoLogin = false
        }
        
    }
});
 
export const {authenticate, setDidTryAutoLogin, setNewUser,logout} = authSlice.actions;
 
export default authSlice.reducer;