import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
    initialContacts:  [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],                       
};


//////////////redux toolkit////////
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: (state.action) , 

        deleteContact: (state.action), 
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


////////////core/////////////
// export const contactsReducer = (state = contactsInitialState, action) => {

//     switch (action.type) {
//         case 'deleteContact':
//             return {
//                 ...state,
//                 initialContacts: action.payload,
//             };
//         default:
//             return state;    
//     }
// };

// export const deleteContact = newContact => {
//     return {
//         type: 'deleteContact',
    
//         payload: newContact,
//     }
// };
