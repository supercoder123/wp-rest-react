import React from "react";
import ActionBar from "../ActionBar";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { fetchPostsByIdentifier } from "../../actions/action-creators";
import { Redirect } from "react-router-dom";

class Article extends React.Component {
  componentDidMount() {
    const {
      articleData: { content },
      match,
    } = this.props;
    
    if (!content) {
      this.props.fetchPostsByIdentifier(match.params.slug, "slug");
    }
  }

  render() {
    const {
      articleData: { title, content, redirectToHome },
      loading,
    } = this.props;

    if (!content && redirectToHome) {
      return <Redirect to={"/"} />;
    }

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <ActionBar backRoute={"/"} />
        <article styles={styles.article}>
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articleData: state.article,
  redirectToHome: state.redirectToHome,
  loading: state.loading,
});

const mapDispatchToProps = {
  fetchPostsByIdentifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
