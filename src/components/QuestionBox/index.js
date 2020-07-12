import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import { withRouter } from "react-router-dom";
import { setArticle } from "../../actions/action-creators";

function QuestionBox({
  categories,
  categoryMap,
  slug,
  setArticle,
  history,
  ...props
}) {
  return (
    <div
      onClick={() => {
        history.push(`/market-talk/${slug}`);
        setArticle(props);
      }}
      className={styles.question__box}
    >
      <div className={styles.category}>{categoryMap[categories[0]]}</div>
      <div className={styles.question}>{props.title.rendered}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categoryMap: state.postData.categoryMap,
  };
};

const mapDispatchToProps = {
  setArticle
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionBox));
