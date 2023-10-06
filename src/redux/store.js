//import { configureStore, nanoid } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
//import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import contacts from '../data/contacts.json';

//console.log(contacts)

const contactsSlice = createSlice({
  name: 'clients',
  initialState: contacts,
  reducers:{
    addClient(state,action) {
      return [...state, action.payload]
    },
    delClient(state,action) {
      return state.filter(contact => contact.id !== action.payload)
    },
  }
})
console.log('contactsSlice >>', contactsSlice);

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(tate,action) {
      return action.payload
    }
  }
})

// export const addClient = createAction("clients/addClient");
// export const delClient = createAction("clients/delClient");
// export const setFilter = createAction("filter/setFilter");

//console.log(addClient({name: 'Имя клиента', number: '11111111111' }));

// const contactReducer = createReducer(contacts, {
//   [addClient]: (state, action) => {return [...state, action.payload];},
//   [delClient]: (state, action) => {return state.filter(contact => contact.id !== action.payload);},
// })
// const filterReducer = createReducer('', {
//   [setFilter]: (state, action) => {return action.payload;},
// })

export const store = configureStore({
    reducer: {
      // contacts: contactReducer,
      // filter: filterReducer
      contacts: contactsSlice.reducer,
      filter: filterSlice.reducer
    },
  });
  
  export const {addClient, delClient } = contactsSlice.actions;
  export const {setFilter} = filterSlice.actions;