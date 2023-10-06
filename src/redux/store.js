import { configureStore, nanoid } from '@reduxjs/toolkit';
import { createAction, createReducer } from "@reduxjs/toolkit";
import contacts from '../data/contacts.json';

//console.log(contacts)

export const addClient = createAction("clients/addClient");
export const delClient = createAction("clients/delClient");

//console.log(addClient({name: 'Имя клиента', number: '11111111111' }));

const contactReduser = createReducer(contacts, {
  [addClient]: (state, action) => {return [...state, action.payload];},
  [delClient]: (state, action) => {return state.filter(task => task.id !== action.payload);},
})
const contactFilter = createReducer('', {})

export const store = configureStore({
    reducer: {
      contacts: contactReduser,
      filter: contactFilter
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