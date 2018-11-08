import * as types from './types'


export const fetchSlides = () => {
  let slides = localStorage.getItem('slides')
  slides = slides ? JSON.parse(slides) : []
  return {
    type: types.SLIDES_FETCHED,
    slides
  }
}

export const addSlide = ({ slide, position }) => {

  let sequence = +localStorage.getItem('sequence') || 1
  localStorage.setItem('sequence', sequence + 1)

  let existing = localStorage.getItem('slides')
  existing = existing ? JSON.parse(existing) : []

  const slideWithId = {
    ...slide,
    id: sequence
  }

  existing.splice(position - 1, 0, slideWithId)
  localStorage.setItem('slides', JSON.stringify(existing))

  return {
    type: types.SLIDE_ADDED,
    payload: {
      slide: slideWithId,
      position
    }
  }
}


export const deleteSlide = (slideId) => {
  let existingSlides = JSON.parse(localStorage.getItem('slides'))
  existingSlides.splice(slideId, 1)
  localStorage.setItem('slides', JSON.stringify(existingSlides))
  return slideDeleted(slideId)
}

export const slideDeleted = (slideId) => {
  return {
    type: types.SLIDE_DELETED,
    slideId
  }
}

export const selectSlide = (slideId) => {
  return {
    type: types.SLIDE_SELECTED,
    slideId
  }
}
