import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"

export let store=configureStore({
    reducer:todoReducer,
})