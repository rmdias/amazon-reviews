import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Hint } from 'luna-ui-lib'

import ReviewItem from 'components/ReviewItem'

import './styles.css'
import connector from './connector'

class Reviews extends PureComponent {
  static propTypes = {
    filters: PropTypes.object,
    reviewsList: PropTypes.array,
    onFetchReviews: PropTypes.func
  }

  componentDidMount() {
    this.props.onFetchReviews(1)
  }

  render() {
    const Items = (
      <dl className="arw_reviews_group">
        <dt className="arw_reviews_group_type"><Hint><strong>December</strong></Hint></dt>
        {this.props.reviewsList.map((review) => {
          return <ReviewItem key={review.reviewId} review={review}/>
        })}
      </dl>
    )

    return (
      <div className="arw_reviews">
        { Items }
      </div>
    )
  }
}

export default connector(Reviews)
