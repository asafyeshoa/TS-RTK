import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ScoreState {
    value: number
}

const initialState = {
    value: 0,
} as ScoreState

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    },
})

export const { increment} = scoreSlice.actions


export const selectCount = (state: RootState) => state.score.value

export default scoreSlice.reducer
