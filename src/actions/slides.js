import * as types from './types'
import v4 from 'uuid/v4'

export const addSlide = ({ slide, position }) => ({
  type: types.SLIDE_ADDED,
  payload: {
    slide: {
      ...slide,
      id: v4()
    },
    position
  }
})

export const updateSlide = (slide, position) => ({
  type: types.SLIDE_CONTENT_UPDATED,
  payload: {
    slide,
    position
  }
})

export const moveSlide = (dispatch, slide, to) => {
  dispatch(deleteSlide(slide.id))
  dispatch(addSlide({ slide, position: to }))
}

export const deleteSlide = (slideId) => ({
  type: types.SLIDE_DELETED,
  slideId
})

export const changeActiveSlide = (slideId) => ({
  type: types.ACTIVE_SLIDE_CHANGED,
  slideId
})
