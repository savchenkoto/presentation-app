import api from '../api/index'
import * as types from './types'

export const fetchImages = () => async (dispatch) => {
  const images = await api.images.getAll()
  dispatch(imagesFetched(images))
}

export const imagesFetched = (images) => {
  return {
    type: types.IMAGES_FETCHED,
    payload: images
  }
}
