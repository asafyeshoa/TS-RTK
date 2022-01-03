import React from "react";
import { useAppSelector } from "../store/hooks";
import { CardsContainer, Wrapper } from "../style/AnswerPage.styles";

const AnswerPage: React.FC = () => {
  const answers = useAppSelector((state) => state.userAnswer.userAnswers);

  return (
    <Wrapper>
      <h1>Answers page</h1>
      <CardsContainer>
        {answers.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                height: "200px",
                width: "200px",
                background: "whitesmoke",
                textAlign: "center",
              }}
            >
              {index}
            </div>
          );
        })}
      </CardsContainer>
    </Wrapper>
  );
};

export default AnswerPage;

// excluded function into another file
// less conditions
