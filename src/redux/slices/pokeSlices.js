import { createSlice } from "@reduxjs/toolkit";

//state init
const initialState = Array.from({ length: 6 });

const pokesSlice = createSlice({
    name: "pokes",
    initialState,
    reducers: {
        addPoke: (state, action) => {
            const { emptyIndex, pokemonData } = action.payload;
            return [...state].with(emptyIndex, pokemonData);
        },
        deletePoke: (state, action) => {
            return [...state].map((poke) => (poke?.id == action.payload.id ? undefined : poke));
        },
    },
});

export const { addPoke, deletePoke } = pokesSlice.actions;
export default pokesSlice.reducer;
