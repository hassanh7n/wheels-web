import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getTokenFromLocalStorage} from '../utils/localStorage';
import customFetch from "../utils/axios";




const initialState = {
    isLoading : false,
    wheelStats : [],
};



export const stats = createAsyncThunk(
    'stats/wheel',
    async(_, thunkAPI) => {
        try {
            const resp = await customFetch.get('/wheelsAll/stats', {
                headers : {
                    authorization : `Bearer ${getTokenFromLocalStorage()}`,
                }
            })
            // console.log(resp.data);
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)




const statsSlice = createSlice({
    name : 'Stats',
    initialState,
    extraReducers:(builder) => {
        builder.
        addCase(stats.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(stats.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            // console.log(payload);
            const {monthlyApplications} = payload;
            state.wheelStats = monthlyApplications;
            
        })
        .addCase(stats.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        })
    }
})


export default statsSlice.reducer;