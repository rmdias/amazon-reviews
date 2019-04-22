import _ from 'lodash'
import { REVIEWS } from 'actions/reviews'

const initialState = {
  list: [ ],
  hasMore: false,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REVIEWS.FETCH.REQUEST: {
      const reviewsState = _.cloneDeep(state)
      reviewsState.hasMore = false

      return reviewsState
    }
    case REVIEWS.FETCH.SUCCESS: {
      const reviewsState = _.cloneDeep(state)

      reviewsState.list = [...reviewsState.list, ...action.response.reviews]
      reviewsState.hasMore = action.response.hasMore

      return reviewsState
    }
    case REVIEWS.FETCH.FAILURE: {
      const reviewsState = _.cloneDeep(state)

      return reviewsState
    }
    case REVIEWS.FETCH.LOADING: {
      const reviewsState = _.cloneDeep(state)

      reviewsState.loading = action.toState

      return reviewsState
    }
    default:
      return state
  }
}
