import { LOADING_START, LOADING_END } from "../../actions/constants"

const loading = false

function loaderReducer(state = loading, action) {
  switch (action.type) {
    case LOADING_START:
      return true

    case LOADING_END:
      return false

    default:
      return state
  }
}

export default loaderReducer
