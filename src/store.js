import { configureStore } from "@reduxjs/toolkit";

import UserSlice from './features/User';
import WheelSlice from './features/Wheels';
import statsSlice from './features/Stats';
import allWheelsSlice from './features/AllWheels';

export const store = configureStore({
    reducer : {
        user : UserSlice,
        Wheel : WheelSlice,
        stats : statsSlice,
        allWheel : allWheelsSlice,
    }
})