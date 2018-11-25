import * as types from './types'

export const changeActiveModalTo = (modal = null, props = null) => ({
  type: types.ACTIVE_MODAL_CHANGED,
  payload: modal ?
    {
      modal,
      data: {
        ...props
      }
    } :
    null
})

export const closeActiveModal = () => {
  return changeActiveModalTo()
}
