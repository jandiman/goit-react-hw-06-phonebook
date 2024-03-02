// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// export const store = configureStore({
//     reducer: {
//         contacts: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//           ],
//         filter: "",
//     }
// }); 


 // const savedContacts = localStorage.getItem('contacts');
  // const [contacts, setContacts] = useState(
  //   savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  // const filterContact = () => {
  //   const filterLowerCase = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterLowerCase)
  //   );
  // };



  ////////////////////////core/////////////

// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });


// export const store = createStore(rootReducer, devToolsEnhancer());


////////////toolkit//////////////

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore ({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer, 
    },
});
