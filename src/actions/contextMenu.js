import * as types from './types'

export const changeActiveContextMenu = (component = null, coords = null, props = null) => {
  return {
    type: types.ACTIVE_CONTEXT_MENU_CHANGED,
    payload: component ?
      {
        component,
        data: {
          ...props,
          coords,
        }
      } :
      null
  }
}

export const closeContextMenu = () => {
  return changeActiveContextMenu()
}
