import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {addUserToLocalStorage, addTokenToLocalStorage,removeUserFromLocalStorage, removeTokenFromLocalStorage,getUserFromLocalStorage, getTokenFromLocalStorage} from '../utils/localStorage';
import customFetch from '../utils/axios';

const initialState = {
    isLoading : false,
    isSidebarOpen : false,
    user : getUserFromLocalStorage() || null,
    token : []
};

export const  registerUser = createAsyncThunk(
    'user/Register',
    async(user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/register', user);
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
) 
export const  loginUser = createAsyncThunk(
    'user/Login',
    async(user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/login', user);
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
) 

const userSlice = createSlice({
    name : "User",
    initialState,
    reducers:{
        toggleSidebar : (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logouttUser : (state, {payload}) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
            if(payload){
                toast.success(payload)
            }
          },
    },
    extraReducers : (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            const {token} = payload;
            addUserToLocalStorage(user);
            addTokenToLocalStorage(token);
            toast.success(`Welcome ${user.name}`)
        })
        .addCase(registerUser.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loginUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            const {token} = payload;
            addTokenToLocalStorage(token);
            addUserToLocalStorage(user);
            toast.success(`Welcome back ${user.name}`)
        })
        .addCase(loginUser.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        })
    }
})

export const { toggleSidebar, logouttUser} = userSlice.actions;

export default userSlice.reducer;