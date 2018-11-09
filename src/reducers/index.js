import { combineReducers } from 'redux'
import slides from './slides'
import activeSlideId from './activeSlideId'
import activeModal from './activeModal'

export default combineReducers({
  slides,
  activeSlideId,
  activeModal
})
