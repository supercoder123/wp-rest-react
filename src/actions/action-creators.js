import * as actions from "./constants";
import { request } from "../api/request";

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: actions.LOADING_START });
    request("posts").then((res) => {
      dispatch({ type: actions.FETCH_POSTS, payload: res.data });
      dispatch({ type: actions.LOADING_END });
    });
  };
};

export const createCategoryMap = () => {
  return {
    type: actions.CREATE_CATEGORY_MAP,
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch({ type: actions.LOADING_START });
    return request("categories").then((res) => {
      dispatch({ type: actions.FETCH_CATEGORIES, payload: res.data });
      dispatch(createCategoryMap());
      dispatch({ type: actions.LOADING_END });
    });
  };
};

export const postsByCategory = (postId) => {
  return (dispatch, getState) => {
    dispatch(fetchCategories()).then((categories) => {
      dispatch(fetchPostsByCategory(getState().postData.categoryMap[postId]));
    });
  };
};

export const fetchPostsByCategory = (postId) => {
  return (dispatch) => {
    dispatch({ type: actions.LOADING_START });
    return request(`posts?per_page=100&categories=${postId}`).then((res) => {
      dispatch({ type: actions.FETCH_POSTS_BY_CATEGORY, payload: res.data });
      dispatch({ type: actions.LOADING_END });
    });
  };
};

export const setArticle = (postData) => {
  return {
    type: actions.SET_ARTICLE,
    payload: {
      title: postData.title && postData.title.rendered ?  postData.title.rendered : postData.title,
      content: postData.content.rendered,
    },
  };
};

export const redirect = (redirectToHome) => {
  return {
    type: actions.REDIRECT,
    payload: redirectToHome
  }
}

export const fetchPostsByIdentifier = (identifier, type) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.LOADING_START });
    let url;
    switch (type) {
      case "slug":
        url = `posts?slug=${identifier}`;
        break;
      case "id":
        url = `posts/${identifier}`;
        break;
      default:
        url = `posts`;
        break;
    }
    return request(url).then((res) => {
      dispatch(setArticle(res.data[0]));
      dispatch({ type: actions.LOADING_END });
      dispatch(redirect(false));
    }).catch(err => {
      console.log(err)
      // redirect to home page if article is not found from slug
      dispatch(redirect(true));
    });
  };
};
