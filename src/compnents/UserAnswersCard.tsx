import React from "react";
import { AnswerObject } from "../types/types";
import { Wrapper } from "../style/UserAnswersCard.style";

const UserAnswersCard: React.FC<AnswerObject> = ({
  question,
  answer,
  correct,
  correctAnswer,
}) => {
  return <Wrapper>{question} </Wrapper>;
};

export default UserAnswersCard;
