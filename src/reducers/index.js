import { combineReducers } from 'redux'
import slides from './slides'
import activeSlideId from './activeSlideId'

export default combineReducers({
  slides,
  activeSlideId
})
