import * as types from '../actions/types'

export default function grabbedSlide (state = null, action) {
  switch (action.type) {
    case types.SLIDE_GRABBED: {
      return {
        slide: action.payload.slide,
        position: action.payload.position
      }
    }
    case types.GRABBED_SLIDE_MOVED: {
      return {
        ...state,
        position: action.position
      }
    }
    case types.SLIDE_DROPPED: {
      return {

      }
    }
    default: {
      return state
    }
  }
}
