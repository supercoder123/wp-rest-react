import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { CommonQuestions } from "../../components/CommonQuestions";
import CategoriesList from "../../components/CategoriesList";
import { fetchPosts, fetchCategories } from "../../actions/action-creators";
import styled from "styled-components/macro";
import { SpinnerOverlay, SpinnerContainer } from "../../shared/components/common-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
`;

class Home extends Component {
  componentDidMount() {
    const { fetchCategories, fetchPosts } = this.props;
    fetchCategories();
    fetchPosts();
  }

  render() {
    const { commonQuestions, categories, loading } = this.props;

    if (loading) {
      return (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      );
    }

    return (
      <>
        <Header />
        <Container>
          <CommonQuestions
            questions={commonQuestions.filter((data, i) => {
              return i < 3 ? data : null;
            })}
          />
          <CategoriesList categories={categories} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    commonQuestions: state.postData.posts,
    categories: state.postData.categories,
    loading: state.loading.requestsInProgress.length === 0 ? false : true
  };
};

const mapDispatchToProps = {
  fetchCategories,
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
