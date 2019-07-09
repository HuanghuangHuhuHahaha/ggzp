import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import fn from './reducers'

export default createStore(fn,applyMiddleware(thunk))