//import { configureStore, nanoid } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from "@reduxjs/toolkit";
import contacts from '../data/contacts.json';

//console.log(contacts)

export const addClient = createAction("clients/addClient");
export const delClient = createAction("clients/delClient");
export const setFilter = createAction("filter/setFilter");

//console.log(addClient({name: 'Имя клиента', number: '11111111111' }));

const contactReducer = createReducer(contacts, {
  [addClient]: (state, action) => {return [...state, action.payload];},
  [delClient]: (state, action) => {return state.filter(contact => contact.id !== action.payload);},
})
const filterReducer = createReducer('', {
  [setFilter]: (state, action) => {return action.payload;},
})

export const store = configureStore({
    reducer: {
      contacts: contactReducer,
      filter: filterReducer
    },
  });
  
  //, (name,number) => {
  // return {
  //   payload: {
  //     id: nanoid(),
  //     name,
  //     number,
  //   },
  // };
  //}