import _ from 'lodash'
import { connect } from 'react-redux'
import { reviews } from 'actions/reviews'

export default connect(
  (state, ownProps) => ({
    reviewsList: _.get(state, 'reviews.list', []),
    filters: _.get(state, 'filters', {})
  }),
  (dispatch) => ({
    onFetchReviews: page => dispatch(reviews.fetch.request(page))
  })
)
