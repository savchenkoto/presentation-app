import * as types from './types'
import { moveSlide } from './slides'

export const grabSlide = (slide, position) => ({
  type: types.SLIDE_GRABBED,
  payload: {
    slide,
    position
  }
})


export const moveGrabbedSlideTo = (position) => ({
  type: types.GRABBED_SLIDE_MOVED,
  position
})

export const dropSlide = (dispatch, slide, to, initialPosition) => {
  initialPosition !== to && moveSlide(dispatch, slide, to)
  return {
    type: types.SLIDE_DROPPED,
  }
}
