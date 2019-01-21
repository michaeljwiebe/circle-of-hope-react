import { createStore } from 'redux'
import songApp from './combineReducer'

const store = createStore(songApp)

export default store