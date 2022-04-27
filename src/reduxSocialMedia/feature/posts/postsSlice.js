import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '1', title: 'First Post', content: 'Hello World!'},
    {id: '2', title: 'Second Post', content:'Nice Try!'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload) //don't try to mutate any data outside of createSlice
        }
    }
});

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;