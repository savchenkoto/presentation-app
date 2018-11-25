import { createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadData, saveData } from './localStorage'
import throttle from 'lodash/throttle'

export default function () {

  const persisted = loadData()

  const store = createStore(
    rootReducer,
    persisted,
    composeWithDevTools()
  )

  store.subscribe(
    throttle((() =>
      saveData({ slides: store.getState().slides })
    ), 300)
  )

  return store
}
