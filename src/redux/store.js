import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import postsReducer from "./reducers/posts.reducer";
import loaderReducer from "./reducers/loader.reducer";
import articleReducer from "./reducers/article.reducer";

const rootReducer = combineReducers({
  postData: postsReducer,
  loading: loaderReducer,
  article: articleReducer,
});

const middleWares = [thunk, logger];

const enhancer = applyMiddleware(...middleWares);

export default createStore(rootReducer, enhancer);
