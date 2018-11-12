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

  existing.splice(position, 0, slideWithId)
  localStorage.setItem('slides', JSON.stringify(existing))

  return slideAdded(slideWithId, position)
}

export const slideAdded = (slide, position) => {
  return {
    type: types.SLIDE_ADDED,
    payload: {
      slide,
      position
    }
  }
}

export const editSlide = (dispatch, { slide, position }) => {
  const slides = JSON.parse(localStorage.getItem('slides'))
  const index = slides.findIndex(item => item.id === slide.id)
  if (index > -1) {
    dispatch(updateSlideContent(slide, index))
    index !== position && moveSlide(dispatch, slide, position)
  }
}

const updateSlideContent = (slide, position) => {
  const slides = JSON.parse(localStorage.getItem('slides'))
  slides[position] = slide
  localStorage.setItem('slides', JSON.stringify(slides))
  return(slideContentUpdated(slide, position))
}

const slideContentUpdated = (slide, position) => {
  return {
    type: types.SLIDE_CONTENT_UPDATED,
    payload: {
      slide,
      position
    }
  }
}

const moveSlide = (dispatch, slide, to) => {
  dispatch(deleteSlide(slide.id))
  dispatch(addSlide({ slide, position: to }))
}

export const deleteSlide = (slideId) => {
  let existingSlides = JSON.parse(localStorage.getItem('slides'))
  const index = existingSlides.findIndex(slide => slide.id === slideId)
  index > -1 && existingSlides.splice(index, 1)
  localStorage.setItem('slides', JSON.stringify(existingSlides))
  return slideDeleted(slideId)
}

const slideDeleted = (slideId) => {
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
