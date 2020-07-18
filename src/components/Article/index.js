import React from "react";
import ActionBar from "../ActionBar";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { fetchPostsByIdentifier } from "../../actions/action-creators";
import { Redirect } from "react-router-dom";
import { Background, SpinnerOverlay, SpinnerContainer } from "../../shared/components/common-components";

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
      return (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      );
    }

    return (
      <Background>
        <ActionBar backRoute={"/"} />
        <article styles={styles.article}>
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </article>
      </Background>
    );
  }
}

const mapStateToProps = (state) => ({
  articleData: state.article,
  redirectToHome: state.redirectToHome,
  loading: state.loading.requestsInProgress.length === 0 ? false : true,
});

const mapDispatchToProps = {
  fetchPostsByIdentifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
