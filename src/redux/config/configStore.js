import { configureStore } from "@reduxjs/toolkit";
import pokesSlice from "../slices/pokeSlices";

const store = configureStore({
    reducer: {
        pokes: pokesSlice,
    },
});

export default store;
