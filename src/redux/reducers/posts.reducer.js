import {
  FETCH_POSTS,
  FETCH_CATEGORIES,
  CREATE_CATEGORY_MAP,
  FETCH_POSTS_BY_CATEGORY,
} from "../../actions/constants"

const initial_state = {
  posts: [],
  categories: [],
  categoryMap: {},
  postsByCategory: [],
}

function postReducer(state = initial_state, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case FETCH_POSTS_BY_CATEGORY:
      return {
        ...state,
        postsByCategory: action.payload,
      }
    case CREATE_CATEGORY_MAP:
      return {
        ...state,
        categoryMap: state.categories.reduce((ac, x) => {
          ac[x.id] = x.name
          ac[x.slug] = x.id
          return ac
        }, {}),
      }
    default:
      return state
  }
}

export default postReducer
