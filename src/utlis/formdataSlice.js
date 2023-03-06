import {createSlice} from "@reduxjs/toolkit";

import { databycountry } from "./localdata";


const formdataSlice = createSlice({
    name : 'formdata',
    initialState:{
    items: ["India"]
    },

    reducers:{
        /**
         *  action when the reducer function called
         * mapping of action and reducer function
         */
        formload: (state, action) =>{
           state.items = [];
           
           if(state.items[0] !== action.payload){
                state.items.push(action.payload);
           }

        },
    },
});

export const {formload} = formdataSlice.actions;

export default formdataSlice.reducer;