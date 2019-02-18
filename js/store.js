


import { createStore, combineReducers } from 'redux'

import noteListReducer from './reducers/noteListReducer'
import initialState from './initialState'

//https://www.reddit.com/r/javascript/comments/42ey9e/redux_reducer_composition_without_slicing_state/
module.exports = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(noteListReducer, initialState());
//module.exports = createStore(noteListReducer, initialState());
