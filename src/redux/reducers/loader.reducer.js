import { LOADING_START, LOADING_END } from "../../actions/constants";

const initialState = {
  requestsInProgress: [],
};

function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        requestsInProgress: [...state.requestsInProgress, action.payload],
      };

    case LOADING_END:
      return {
        ...state,
        requestsInProgress: state.requestsInProgress.filter(
          (requestName) => requestName !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default loaderReducer;
