import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./styles.module.scss";
import { setArticle } from "../../actions/action-creators";
import { connect } from "react-redux";

function ActionButton({ type, setArticle, ...props }) {
  let ui;
  // change ui based on type of content since we are using same component
  // for category name, category posts and search results
  if (type === "category") {
    const { categoryName, type, history, id, slug } = props;
    // for showing only category title
    ui = (
      <div
        onClick={() => {
          history.push(`/market-talk/category/${slug}`, {
            categoryName,
            type,
            id,
          });
        }}
        className={styles.actionButton}
      >
        <div>{categoryName.toUpperCase()}</div>
        <div>&#10148;</div>
      </div>
    );
  } else {
    const { title, excerpt, slug, history, content } = props;
    // for showing title with excerpt
    ui = (
      <div
        onClick={() => {
          history.push(`/market-talk/${slug}`);
          setArticle(props);
        }}
        className={styles.resultBox}
      >
        <div className={styles.content}>
          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className={styles.excerpt}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
        <div>&#10148;</div>
      </div>
    );
  }
  return <div>{ui}</div>;
}

const mapDispatchToProps = {
  setArticle,
};

export default withRouter(connect(null, mapDispatchToProps)(ActionButton));
