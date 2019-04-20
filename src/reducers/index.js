import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import filters from './filters'
import reviews from './reviews'

const reducers = combineReducers({
  router,
  filters,
  reviews
})

export default reducers
