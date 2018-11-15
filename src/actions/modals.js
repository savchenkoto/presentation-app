import * as types from './types'

export const changeActiveModalTo = (modal = null, props = null) => {
  return {
    type: types.ACTIVE_MODAL_CHANGED,
    payload: {
      modal,
      data: {
        ...props
      }
    }
  }
}

export const closeActiveModal = () => {
  return changeActiveModalTo()
}
