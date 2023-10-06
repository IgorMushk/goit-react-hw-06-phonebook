import contacts from '../data/contacts.json';
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'clients',
    //initialState: contacts,
    initialState: {contactsList: [...contacts]},
    reducers:{
      addClient(state,action) {
        //return [...state, action.payload]
        state.contactsList.push(action.payload)
      },
      delClient(state,action) {
        //return state.contactsList.filter(contact => contact.id !== action.payload) - error!
        //state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload) ok!
        const index = state.contactsList.findIndex(contact => contact.id === action.payload);
        state.contactsList.splice(index, 1);  
      },
    }
  })
  console.log('contactsSlice >>', contactsSlice);

  export const {addClient, delClient } = contactsSlice.actions;
  export const contactReducer = contactsSlice.reducer