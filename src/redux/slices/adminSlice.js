import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admins: JSON.parse(localStorage.getItem("admins")) || [],
    search: "",
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addToAdmins: (state, action) => {
            const addedUsers = [...state.admins, action.payload];
            localStorage.setItem("admins", JSON.stringify(addedUsers));
            state.admins = addedUsers;
        },
        removeFromAdmins: (state, action) => {
            const id = action.payload;
            state.admins = state.admins.filter((user) => user.key !== id);
            localStorage.setItem("admins", JSON.stringify(state.admins));
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { addToAdmins, removeFromAdmins, setSearch } = adminSlice.actions;
export const { reducer } = adminSlice;
