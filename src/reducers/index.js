import { combineReducers } from 'redux'
import slides from './slides'
import activeSlideId from './activeSlideId'
import activeModal from './activeModal'
import grabbedSlide from './grabbedSlide'
import activeContextMenu from './activeContextMenu'

export default combineReducers({
  slides,
  activeSlideId,
  activeModal,
  activeContextMenu,
  grabbedSlide,
})
