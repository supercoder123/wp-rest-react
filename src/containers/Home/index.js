import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { CommonQuestions } from "../../components/CommonQuestions";
import CategoriesList from "../../components/CategoriesList";
import { fetchPosts, fetchCategories } from "../../actions/action-creators";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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
    const { commonQuestions, categories } = this.props;

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
  };
};

const mapDispatchToProps = {
  fetchCategories,
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
