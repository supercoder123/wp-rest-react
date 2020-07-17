import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ActionBar from "../../components/ActionBar";
import ListComponent from "../../components/ListComponent";
import { postsByCategory } from "../../actions/action-creators";
import { Background } from "../../shared/components/common-components";


class PageComponent extends Component {
  componentDidMount() {
    const { match, postsByCategory } = this.props;
      postsByCategory(match.params.slug);
  }

  render() {
    const { postsByCategories, loading, categoryMap } = this.props;

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <Background>
        <ActionBar
          header={
            postsByCategories.length > 0 &&
            categoryMap[postsByCategories[0].categories[0]]
          }
          backRoute="/"
        />
        {postsByCategories.length > 0 && (
          <ListComponent list={postsByCategories} />
        )}
      </Background>
    );
  }
}

PageComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    postsByCategories: state.postData.postsByCategory,
    loading: state.loading,
    categoryMap: state.postData.categoryMap,
  };
};

const mapDispatchToProps = {
  postsByCategory,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageComponent)
);
