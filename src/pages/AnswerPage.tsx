import React from "react";
import { useAppSelector } from "../store/hooks";
import { Wrapper, CardsContainer } from "../style/AnswerPage.styles";
import UserAnswersCard from "../compnents/UserAnswersCard";

const AnswerPage: React.FC = () => {
  const answers = useAppSelector((state) => state.userAnswer.userAnswers);

  return (
    <Wrapper>
      <h1>Answers page</h1>
      <CardsContainer>
        {answers.map((item) => {
          return (
            <UserAnswersCard
              question={item.question}
              answer={item.answer}
              correct={item.correct}
              correctAnswer={item.correctAnswer}
            />
          );
        })}
      </CardsContainer>
    </Wrapper>
  );
};

export default AnswerPage;
