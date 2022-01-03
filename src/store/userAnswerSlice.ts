import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { AnswerObject } from "../types/types";

interface UserAnswerState {
  userAnswers: AnswerObject[];
}

const initialState = {
  userAnswers: [],
} as UserAnswerState;

export const userAnswerSlice = createSlice({
  name: "userAnswer",
  initialState,
  reducers: {
    addAnswer: (state, action: any) => {
      state.userAnswers.push(action.payload as never);
    },
  },
});

export const { addAnswer } = userAnswerSlice.actions;

export const selectUserAnswer = (state: RootState) =>
  state.userAnswer.userAnswers;

export default userAnswerSlice.reducer;
