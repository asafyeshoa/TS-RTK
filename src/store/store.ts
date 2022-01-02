import { configureStore } from '@reduxjs/toolkit'
import {scoreSlice} from "./scoreSlice";
import {userAnswerSlice} from "./userAnswerSlice";

export const store = configureStore({
    reducer: {
        score: scoreSlice.reducer,
        userAnswer: userAnswerSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
