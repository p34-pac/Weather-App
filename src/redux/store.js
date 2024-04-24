/* eslint-disable no-unused-vars */
import { createStore } from 'redux'
import { reducer } from './reducer'

const store = createStore(reducer)

export default store;

