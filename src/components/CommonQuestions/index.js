import React from "react";
import QuestionBox from "../QuestionBox";
import "./styles.scss";
import { SectionHeader, OuterMargin } from "../../shared/components/common-components";
import styled from "styled-components/macro";

const QuestionContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 5px;
    display: none;
  }
`;

export function CommonQuestions({ questions }) {
  return (
    <OuterMargin>
      <SectionHeader>Common Questions</SectionHeader>
      <QuestionContainer>
        {questions.map((item) => (
          <QuestionBox key={item.id} {...item} />
        ))}
      </QuestionContainer>
    </OuterMargin>
  );
}
