import { combineReducers } from 'redux'
import * as types from './types'

const mainReducer = (state = null , { type }) => {
    switch (type) {
        default:
            return type
    }
}



// COMBINED REDUCERS
const reducers = {
    main: mainReducer,
}

export default combineReducers(reducers)
