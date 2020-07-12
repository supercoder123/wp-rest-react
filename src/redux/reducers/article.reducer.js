import { SET_ARTICLE, REDIRECT } from "../../actions/constants";

const initialState = {
  content: "",
  title: "",
  redirectToHome: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {
        ...state,
        content: action.payload.content,
        title: action.payload.title,
      };

    case REDIRECT:
      return {
        ...state,
        redirectToHome: action.payload
      }

    default:
      return state;
  }
};
