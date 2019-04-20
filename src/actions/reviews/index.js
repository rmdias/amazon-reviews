import { action, createRequestTypes } from 'actions/utils'

export const REVIEWS = {
  FETCH: createRequestTypes('FETCH_REVIEWS')
}

export const reviews =  {
  fetch: {
    request: page => action(REVIEWS.FETCH.REQUEST, { page }),
    success: response => action(REVIEWS.FETCH.SUCCESS, { response }),
    failure: (error, requests) => action(REVIEWS.FETCH.FAILURE, { error, requests }),
    loading: toState => action(REVIEWS.FETCH.LOADING, { toState })
  }
}
