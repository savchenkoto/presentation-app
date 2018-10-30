import * as types from '../actions/types'

export default function images (state = [], action) {
  switch (action.type) {
    case types.IMAGES_FETCHED: {
      return [
        ...action.payload
      ]
    }
    default:
      return state
  }
}
