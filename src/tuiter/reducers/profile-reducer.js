import profile from "../data/profile.json";
import { createAction, createReducer } from '@reduxjs/toolkit';

const setProfile = createAction('SET_PROFILE');

const profileReducer = createReducer(profile, (builder) => {
    builder
    .addCase(setProfile, (state, action) => {
        state = action.payload;
    })
})

export {setProfile};
export default profileReducer;