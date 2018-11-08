import * as types from '../actions/types'


export default function activeSlideId (state = 0, action) {
  switch (action.type) {
    case types.SLIDE_SELECTED: {
      return action.slideId
    }
    default: {
      return state
    }
  }
}
