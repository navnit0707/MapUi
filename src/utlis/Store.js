import {configureStore} from '@reduxjs/toolkit'
import formdataSlice from './formdataSlice';


const store = configureStore({
    reducer:{
        formdata : formdataSlice,
       
    }
});

export default store;

/**
 *  create store 
 *      - configueStore - RTK
 * 
 * provide my store to app
 *    - <provider store = {store}>  - import from react-reduc
 * 
 * slice
 *  -RTk - createslice
 *      - export action and slice
 * provide slice to store config
 * 
 */