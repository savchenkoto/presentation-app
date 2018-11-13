import * as types from '../actions/types'


export default function activeSlideId (state = 0, action) {
  switch (action.type) {
    case types.SLIDE_SELECTED: {
      return action.slideId
    }
    case types.SLIDE_DELETED: {
      return state === action.slideId ? 0 : state
    }
    default: {
      return state
    }
  }
}
