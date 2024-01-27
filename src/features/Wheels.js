import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {addUserToLocalStorage, addTokenToLocalStorage,removeUserFromLocalStorage, removeTokenFromLocalStorage,getUserFromLocalStorage, getTokenFromLocalStorage} from '../utils/localStorage';
import customFetch from '../utils/axios';



const initialState = {
    isLoading : false,
    name : '',
    price : 0,
    discription : '',
    images : '',
    company : '',
    location : '',
    contactNo : '',
    category : 'Motorbike',
    categoryOptions : ['Motorbike', 'Car', 'Bus', 'Cycle', 'Sports'],
    type : 'Auto',
    typeOptions : ["Auto", "Manual"],
    color : '',
    token : getTokenFromLocalStorage(),
    myWheels : [],
    isDelete : false,
    isEditing : false,
    wheelId : ""
}


export const deletProduct = createAsyncThunk(
    'wheel/deleteWheel',
    async(wheelId, thunkAPI) => {
        try {
            const resp = await customFetch.delete(`/wheelsAll/${wheelId}`, {
                headers : {
                    authorization : `Bearer ${getTokenFromLocalStorage()}`,
                },
            })
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)


export const updateWheel = createAsyncThunk(
    'wheels/updateWheel',
    async({wheelId, wheel}, thunkAPI) => {
        try {
            const resp = await customFetch.patch(`/wheelsAll/${wheelId}`, wheel, {
                headers : {
                    authorization : `Bearer ${getTokenFromLocalStorage()}`,
                },
            })
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)


export const showMyWheels = createAsyncThunk(
    'allwheels/MyWheels', 
    async(_, thunkAPI) => {
        try {
            const resp = await customFetch.get('/wheelsAll', {
                headers : {
                    authorization : `Bearer ${getTokenFromLocalStorage()}`,
                },
            })
            // console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
    )


export const createProduct = createAsyncThunk(
    'product/Create' ,
    async(wheel, thunkAPI) => {
        try {
            const resp = await customFetch.post('/wheelsAll', wheel,{
                headers : {
                    authorization : `Bearer ${getTokenFromLocalStorage()}`,
                },
            })
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);


export const uploadImages = createAsyncThunk(
    '/wheels/uploads',
    async(file, thuunkAPI) => {
        try {
            const resp = await customFetch.post('/wheelsAll/uploads', file, {
                headers : {
                    authorization : `Bearer ${getTokenFromLocalStorage()}`,
                },
            });
            console.log(resp.data);
            return resp.data
        } catch (error) {
            return thuunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)



const wheelSlice = createSlice({
    name : 'Wheel',
    initialState,
    reducers : {
        handleChange : (state, {payload : {name, value}}) => {
            state[name] = value;
        },
        clearValues : () => {
            return{
                ...initialState,
            }
        },
        setEditJob : (state, {payload}) => {
            return{...state, isEditing : true, ...payload};
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(createProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createProduct.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            toast.success('Product uploaded successfuly')
        })
        .addCase(createProduct.rejected, (state, {payload}) => {
            state.isLoading = false
            toast.error(payload)
        })
        .addCase(uploadImages.pending, (state) => {
            state.isLoading = true
        })
        .addCase(uploadImages.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            const {img} = payload;
            state.images = img;
            console.log(state.images);
            toast.success("Images uploaded")
        })
        .addCase(uploadImages.rejected, (state, {payload}) => {
            state.isLoading = false
            toast.error(payload)
        })
        .addCase(showMyWheels.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(showMyWheels.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            const {wheels} = payload;
            state.myWheels = wheels;
        })
        .addCase(showMyWheels.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        })
        .addCase(deletProduct.pending, (state) => {
            state.isLoading = true
            state.isDelete = true;
        })
        .addCase(deletProduct.fulfilled, (state) => {
            state.isLoading = false;
            state.isDelete = false;
            toast.success('Wheel deleted successfuly')
        })
        .addCase(deletProduct.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload);
        })
        .addCase(updateWheel.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateWheel.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            
            // const {product} = payload;
            console.log(payload);
            toast.success('Product updated successfuly')
            state.isEditing = false
        })
        .addCase(updateWheel.rejected, (state, {payload}) => {
            state.isLoading = false
            toast.error(payload)
        })
    }
})




export const { handleChange, clearValues, setEditJob } = wheelSlice.actions;

export default wheelSlice.reducer;
