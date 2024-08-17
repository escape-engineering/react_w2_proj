import { createSlice } from "@reduxjs/toolkit";

//state init
const initialState = [
    { id: 1, title: "react를 배워봅시다." },
    { id: 2, title: "redux를 배워봅시다." },
];

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload];
        },
        updateTodo: (state, action) => {
            return [...state].map((todo) => {
                return todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo;
            });
        },
        deleteTodo: (state, action) => {
            return [...state].filter((todo) => todo.id !== action.payload.id);
        },
    },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
