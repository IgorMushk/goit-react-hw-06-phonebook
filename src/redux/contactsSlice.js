import contacts from '../data/contacts.json';
import { createSlice } from "@reduxjs/toolkit";

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

  export const {addClient, delClient } = contactsSlice.actions;
  export const contactReducer = contactsSlice.reducer