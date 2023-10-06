import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from "@reduxjs/toolkit";
import contacts from '../data/contacts.json';

//console.log(contacts)

const contactReduser = createReducer(contacts, {})
const contactFilter = createReducer('', {})

export const store = configureStore({
    reducer: {
      contacts: contactReduser,
      filter: contactFilter
    },
  });
  