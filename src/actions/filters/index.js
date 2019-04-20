import { action, createRequestTypes } from 'actions/utils'

export const FILTERS = createRequestTypes('FILTER')

export const filters =  {
  request: (filterType, filterParameter) => action(FILTERS.REQUEST, { filterType, filterParameter }),
  success: response => action(FILTERS.SUCCESS, { response }),
  failure: (error, requests) => action(FILTERS.FAILURE, { error, requests }),
  loading: toState => action(FILTERS.LOADING, { toState })
}