import * as types from './types'

export const changeActiveContextMenu = (component = null, coords = null, props = null) => {
  return {
    type: types.ACTIVE_CONTEXT_MENU_CHANGED,
    payload: {
      component,
      data: {
        ...props,
        coords,
      }
    }
  }
}

export const closeContextMenu = () => {
  return changeActiveContextMenu()
}
