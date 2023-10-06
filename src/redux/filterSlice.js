const { createSlice } = require("@reduxjs/toolkit")

const filterSlice = createSlice({
    name: 'filter',
    //initialState: '',
    initialState: {value: ''},
    reducers: {
      setFilter(state,action) {
        //return action.payload
        state.value = action.payload;
      }
    }
  })
  
  export const {setFilter} = filterSlice.actions;
  export const filterReducer = filterSlice.reducer;