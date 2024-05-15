import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) =>{
            state.counter += action.payload
        },
        decrement: (state, action) =>{
            state.counter = state.counter - action.payload
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
