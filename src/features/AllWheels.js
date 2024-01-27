import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import customFetch from '../utils/axios';


const initialFilters = {
    name : '',
    category : 'all',
    company : '',
    location : '',
    type : 'all',
    typeOptions : ['Manual', 'Auto', 'all'],
    categoryOptions : ['Motorbike', 'Car', 'Bus', 'Cycle', 'Sports',],
    // companyOptions : ['ikea', 'liddy', 'marcos'],
    sort : 'latest',
    sortOptions : ['latest', 'oldest', 'a-z', 'z-a'],
    numOfPages: 1,
    page: 1,
};


const initialState = {
    isLoading : false,
    wheels : [],
    numOfPages : 0,
    totalwheels : 0,
    wheel : [],
    sliderWheel : [],
    ...initialFilters
};


export const allWheelsPublic = createAsyncThunk(
    'wheels/public',
    async(_, thunkAPI) => {
      const { page, name, category, company, location, sort } =
      thunkAPI.getState().allWheel;
      console.log(name, category, company, sort);
      let url = `/allWheels?category=${category}&sort=${sort}&page=${page}`;
      
      if (name) {
        url = url + `&name=${name}`;
      }
      if (location) {
        url = url + `&location=${location}`;
      }
      if (company) {
        url = url + `&company=${company}`;
      }

        try {
            const resp = await customFetch.get(url);
            console.log(resp.data);
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

export const slider = createAsyncThunk(
  'wheels/slider',
  async(_, thunkAPI) => {
      try {
          const resp = await customFetch.get('/allWheels/slider');
          console.log(resp.data);
          return resp.data
      } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.msg)
      }
  }
)
export const singleWheel = createAsyncThunk(
  'wheels/Single',
  async(id, thunkAPI) => {
    try {
      const resp = await customFetch.get(`/allWheels/${id}`);
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
)

const allWheels = createSlice({
    name : 'allWheel',
    initialState,
    reducers:{
        showLoading: (state) => {
          state.isLoading = true;
        },
        hideLoading : (state) => {
          state.isLoading = false
        },
        handleChange : (state, { payload  : {name, value}}) => {
           state.page = 1
          state[name] = value;
        },
        clearFilters: (state) => {
          return {...state, ...initialFilters}
        },
        changePage : (state, {payload}) => {
          state.page =  payload;
        },
        clearAllJobsState : () => initialState,
      },
    extraReducers : (builder) => {
        builder
        .addCase(allWheelsPublic.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(allWheelsPublic.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            const {wheels, numOfPages, totalwheels} = payload;
            state.wheels = wheels;
            state.numOfPages = numOfPages;
            state.totalwheels = totalwheels;
        })
        .addCase(allWheelsPublic.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        })
        .addCase(singleWheel.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(singleWheel.fulfilled, (state, {payload}) => {
          const {wheel} = payload;
          state.wheel = wheel;
        })
        .addCase(singleWheel.rejected, (state, {payload}) => {
          state.isLoading = false;
          toast.error(payload)
      })
      .addCase(slider.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(slider.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        const {allWheels} = payload;
        state.sliderWheel = allWheels;
    })
    .addCase(slider.rejected, (state, {payload}) => {
        state.isLoading = false;
        toast.error(payload)
    })
    }
});



export const {
    hideLoading, 
    showLoading,
    handleChange,
    clearFilters,
    changePage,
    clearAllJobsState
  } = allWheels.actions;
export default allWheels.reducer;