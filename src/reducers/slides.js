import * as types from '../actions/types'

export default function slides (state = [], action) {
  switch (action.type) {
    case types.SLIDES_FETCHED: {
      return [
        ...action.slides,
      ]
    }
    case types.SLIDE_ADDED: {
      return [
        ...state.slice(0, action.payload.position - 1),
        action.payload.slide,
        ...state.slice(action.payload.position - 1)
      ]
    }
    case types.SLIDE_DELETED: {
      return state.filter(slide => slide.id !== action.slideId)

    }
    default:
      return state
  }
}
