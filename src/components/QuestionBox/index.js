import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import { withRouter } from "react-router-dom";
import { setArticle } from "../../actions/action-creators";
import styled from "styled-components/macro";

const Container = styled.div`
  border: 1px solid #eee;
  padding: 20px;
  width: 300px;
  margin: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
`;

const QuestionCategory = styled.div`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
`;

const Question = styled.div`
  font-weight: 500;
`;

function QuestionBox({
  categories,
  categoryMap,
  slug,
  setArticle,
  history,
  ...props
}) {
  return (
    <Container
      onClick={() => {
        history.push(`/market-talk/${slug}`);
        setArticle(props);
      }}
    >
      <QuestionCategory>{categoryMap[categories[0]]}</QuestionCategory>
      <Question className={styles.question}>{props.title.rendered}</Question>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    categoryMap: state.postData.categoryMap,
  };
};

const mapDispatchToProps = {
  setArticle,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionBox)
);
