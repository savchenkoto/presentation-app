import * as types from '../actions/types'

export default function activeModal (state = null, action) {
  switch (action.type) {
    case types.ACTIVE_MODAL_CHANGED: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
