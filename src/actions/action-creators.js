import * as actions from "./constants";
import { request } from "../api/request";

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: actions.LOADING_START, payload: actions.FETCH_POSTS });
    const results = await request("posts");
    dispatch({ type: actions.FETCH_POSTS, payload: results.data });
    dispatch({ type: actions.LOADING_END, payload: actions.FETCH_POSTS });
  };
};

export const createCategoryMap = () => {
  return {
    type: actions.CREATE_CATEGORY_MAP,
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.LOADING_START,
      payload: actions.FETCH_CATEGORIES,
    });
    const results = await request("categories");
    dispatch({ type: actions.FETCH_CATEGORIES, payload: results.data });
    dispatch(createCategoryMap());
    dispatch({ type: actions.LOADING_END, payload: actions.FETCH_CATEGORIES });
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
    dispatch({
      type: actions.LOADING_START,
      payload: actions.FETCH_POSTS_BY_CATEGORY,
    });
    return request(`posts?per_page=100&categories=${postId}`).then((res) => {
      dispatch({ type: actions.FETCH_POSTS_BY_CATEGORY, payload: res.data });
      dispatch({
        type: actions.LOADING_END,
        payload: actions.FETCH_POSTS_BY_CATEGORY,
      });
    });
  };
};

export const setArticle = (postData) => {
  return {
    type: actions.SET_ARTICLE,
    payload: {
      title:
        postData.title && postData.title.rendered
          ? postData.title.rendered
          : postData.title,
      content: postData.content.rendered,
    },
  };
};

export const redirect = (redirectToHome) => {
  return {
    type: actions.REDIRECT,
    payload: redirectToHome,
  };
};

export const fetchPostsByIdentifier = (identifier, type) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.LOADING_START, payload: actions.SET_ARTICLE });
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
    return request(url)
      .then((res) => {
        dispatch(setArticle(res.data[0]));
        dispatch({ type: actions.LOADING_END, payload: actions.SET_ARTICLE });
        dispatch(redirect(false));
      })
      .catch((err) => {
        console.log(err);
        // redirect to home page if article is not found from slug
        dispatch(redirect(true));
      });
  };
};
