import _ from 'lodash'
import { connect } from 'react-redux'
import { reviews } from 'actions/reviews'

export default connect(
  (state, ownProps) => ({
    filters: _.get(state, 'filters', {}),
    reviewsList: _.get(state, 'reviews.list', []),
    hasMore: _.get(state, 'reviews.hasMore', false),
    loading: _.get(state, 'reviews.loading', true)
  }),
  (dispatch) => ({
    onFetchReviews: page => dispatch(reviews.fetch.request(page))
  })
)
