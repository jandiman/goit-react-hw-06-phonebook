import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterInitialState = {
    filter: '',
};

//////////toolkit////////

const filterSlice = createSlice({
    name: 'filter',
    initialState: filter,
    reducers: {
        setFilter: (state, action) => {
            state.newFilter = action.payload; 
        },         
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;



////////////////////core/////////////////

// export const filterReducer = (state = filterInitialState, action) => {

//     switch (action.type) {
//         case 'setFilter':
//             return {
//                 ...state,
//                 filter: action.payload,
//             };
//         default:
//             return state;    
//     }
// };

// export const setFilter = newFilter => {
//     return {
//         type: 'setFilter',
    
//         payload: newFilter,
//     }
// };