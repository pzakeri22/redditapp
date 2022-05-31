import {fetchPostData} from './api.js';
import {createSlice} from '@reduxjs/toolkit';



/* 
export selectors 
export const selectIsCompleteIDs = state => state.todos.filter(
  todo => todo.isComplete).map(todo => todo.id)

export default XXX.reducer
export action creators - export const { addTodo, toggleTodo } = todosSlice.actions
*/

// name: 'todos',
// reducer: (state, action) => newState,
// actions: {
//   addTodo: (payload) => ({type: 'todos/addTodo', payload}),
//   toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})
// },

//Case reducers should have a name that corresponds to an action type the slice can handle, e.g.;
// dispatch(loadData()); - useeffect



const searchSlice = createSlice({
    name: "search",
    initialState: [
        {

        },
        {
        
        },
    ],
    reducers: {
        loadData: (state, action) => {
            return action.payload;
        },

        
    }

})

const filterSlice = createSlice({
    name: "filter",
    initialState: [
        {

        },
        {
        
        },
    ],
    reducers: {
        loadData: (state, action) => {
            return action.payload;
        },

        
    }

})
