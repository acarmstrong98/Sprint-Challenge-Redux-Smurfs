/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURFS, FETCHING_SUCCESS, FETCHING_ERROR } from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer (state = initialState, action) {
  console.log('reducer', action)
  switch(action.type) {
    case FETCHING_SMURFS:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    }
    case FETCHING_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      error: null
    }
    case FETCHING_ERROR:
    return {
      ...state,
      error: action.payload
    }
  default:
    return state
  }
}

export default reducer 