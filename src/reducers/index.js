import { combineReducers } from 'redux'
import slides from './slides'
import activeSlideId from './activeSlideId'
import activeModal from './activeModal'
import grabbedSlide from './grabbedSlide'

export default combineReducers({
  slides,
  activeSlideId,
  activeModal,
  grabbedSlide,
})
