import React from "react";
import { AnswerObject } from "../types/types";
import { Wrapper, ButtonWrapper } from "../style/UserAnswersCard.style";

const UserAnswersCard: React.FC<AnswerObject> = ({
  question,
  answer,
  correct,
  correctAnswer,
  questionNr,
}) => {
  return (
    <Wrapper>
      <p className="number">Question: {questionNr} / 10</p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        <ButtonWrapper key={answer} correct={correct}>
          <button disabled={true} value={answer}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
};

export default UserAnswersCard;
