import * as types from '../actions/types'

const getInitialState = () => ({
  modal: null,
  data: null
})

export default function activeModal (state = getInitialState(), action) {
  switch (action.type) {
    case types.ACTIVE_MODAL_CHANGED: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
