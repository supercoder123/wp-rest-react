import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./styles.module.scss";

function ActionBar({ header, history, backRoute }) {
  return (
    <div className={styles.actionBar}>
      <div className={styles.container}>
        <div
          onClick={() => {
            backRoute ? history.push(backRoute) : history.goBack();
          }}
          className={styles.arrow}
        >
          &#8592;
        </div>
        {header}
      </div>
    </div>
  );
}

export default withRouter(ActionBar);
