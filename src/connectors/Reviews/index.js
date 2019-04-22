import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import moment from 'moment'
import { Hint, CircularLoader } from 'luna-ui-lib'

import NoResults from 'components/NoResults'
import ReviewItem from 'components/ReviewItem'

import './styles.css'
import connector from './connector'

import FilterReviews from 'services/FilterReviews'

class Reviews extends PureComponent {
  constructor(props) {
    super(props)

    window.scrollTo(0, 0)
    this.state = { filteredReviews: [] }
  }

  static propTypes = {
    loading: PropTypes.bool,
    hasMore: PropTypes.bool,
    filters: PropTypes.object,
    reviewsList: PropTypes.array,
    onFetchReviews: PropTypes.func
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const comparisonParameters = {
      prev: {
        filters: prevState.filters,
        reviewsList: prevState.reviewsList
      },
      next: {
        filters: nextProps.filters,
        reviewsList: nextProps.reviewsList
      }
    }
    const updateFilteredReviews = JSON.stringify(comparisonParameters.prev) !== JSON.stringify(comparisonParameters.next)

    if (updateFilteredReviews) {
      return {
        filteredReviews: new FilterReviews(nextProps.filters, nextProps.reviewsList)
      }
    }

    return null
  }

  getGroupByLabel(date) {
    if (this.props.filters.groupBy === 'day') {
      return moment(date).format('DD.MM.YYYY')
    }

    if (this.props.filters.groupBy === 'week') {
      return `${moment(date).format('DD.MM.YYYY')} - ${moment(date).add(7, 'day').format('DD.MM.YYYY')}`
    }

    if (this.props.filters.groupBy === 'month') {
      return moment(date).format('MMMM')
    }

    return date
  }

  componentDidMount() {
    this.props.onFetchReviews(1)
  }

  render() {
    const showLoader = this.props.loading && !this.props.reviewsList.length
    const showNoResults = !this.props.loading && !this.state.filteredReviews.length
    const loader = <CircularLoader className="arw_reviews__loader" key={0} kind="primary" size={50} border={1} />
    const Items = this.state.filteredReviews.map((reviewGroup) => {
      return (
        <dl className="arw_reviews_group" key={JSON.stringify(reviewGroup)}>
          <dt className="arw_reviews_group_type">
            <Hint>
              <strong>{this.getGroupByLabel(reviewGroup.date)}</strong>
            </Hint>
          </dt>
          <dd>{reviewGroup.reviews.map((reviewData) => {
            return <ReviewItem key={JSON.stringify(reviewData)} review={reviewData.review} />
          })}</dd>
        </dl>
      )
    })

    return (
      <div className="arw_reviews">
        { showLoader && loader }
        { showNoResults && <NoResults /> }
        <InfiniteScroll
          pageStart={1}
          loadMore={this.props.onFetchReviews.bind(this)}
          hasMore={this.props.hasMore}
          loader={loader}
        >
          { Items }
        </InfiniteScroll>
      </div>
    )
  }
}

export default connector(Reviews)
