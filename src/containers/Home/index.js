import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { CommonQuestions } from "../../components/CommonQuestions";
import CategoriesList from "../../components/CategoriesList";
import { fetchPosts, fetchCategories } from "../../actions/action-creators";

class Home extends Component {
  componentDidMount() {
    const { fetchCategories, fetchPosts } = this.props;
    fetchCategories();
    fetchPosts();
  }

  render() {
    const { commonQuestions, categories } = this.props;

    return (
      <div>
        <Header />
        <CommonQuestions
          questions={commonQuestions.filter((data, i) => {
            return i < 3 ? data : null;
          })}
        />
        <CategoriesList categories={categories} />
      </div>
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
