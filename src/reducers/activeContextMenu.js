import * as types from '../actions/types'

export default function activeContextMenu (state = null, action) {
  switch (action.type) {
    case types.ACTIVE_CONTEXT_MENU_CHANGED: {
      return {
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}
