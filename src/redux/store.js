import { configureStore, nanoid } from '@reduxjs/toolkit';
import { createAction, createReducer } from "@reduxjs/toolkit";
import contacts from '../data/contacts.json';

//console.log(contacts)

export const addClient = createAction("clients/addClient"
  
);

console.log(addClient({name: 'Имя клиента', number: '11111111111' }));

const contactReduser = createReducer(contacts, {})
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