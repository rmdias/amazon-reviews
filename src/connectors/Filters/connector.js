import _ from 'lodash'
import { connect } from 'react-redux'

import { filters } from 'actions/filters'

export default connect(
  (state, ownProps) => ({
    filters: _.get(state, 'filters', {})
  }),
  (dispatch) => ({
    onChangeFilters: (filterType, filterParameter) => dispatch(filters.request(filterType, filterParameter))
  })
)
