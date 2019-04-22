import _ from 'lodash'
import { FILTERS } from 'actions/filters'
import DEFAULT_STAR_RATING from 'constants/DEFAULT_STAR_RATING'

const initialState = {
  search: '',
  groupBy: 'day',
  order: null,
  stars: [ DEFAULT_STAR_RATING ],
  loading: false
}

function handleStarUpdate(state, action) {
  const targetIndex = state[action.filterType].indexOf(action.filterParameter)
  if (targetIndex > -1) {
    state[action.filterType].splice(targetIndex, 1)
  } else {
    state[action.filterType].push(action.filterParameter)
  }

  return state[action.filterType]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTERS.REQUEST: {
      const filterState = _.cloneDeep(state)

      if (action.filterType === 'ALL') {
        return action.filterParameter
      }

      if (action.filterType === 'stars') {
        filterState[action.filterType] = handleStarUpdate(state, action)
      } else {
        filterState[action.filterType] = action.filterParameter
      }

      return filterState
    }
    case FILTERS.SUCCESS: {
      const filterState = _.cloneDeep(state)

      return filterState
    }
    case FILTERS.FAILURE: {
      const filterState = _.cloneDeep(state)

      return filterState
    }
    case FILTERS.LOADING: {
      const filterState = _.cloneDeep(state)

      return filterState
    }
    default:
      return state
  }
}
