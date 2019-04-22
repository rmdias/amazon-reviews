import _ from 'lodash'
import moment from 'moment'

export default class FilterReviews {
  constructor(filters, reviewsList) {
    this.filters = filters
    this.reviewsList = _.cloneDeep(reviewsList)
    this.filteredReviewsList = []

    return this.handleFilters()
  }

  handleFilters() {
    this.filterStars()
    this.filterSearchParameter()
    this.orderReviews()
    this.groupBy()

    return this.filteredReviewsList
  }

  filterStars() {
    if (this.filters.stars.length === 0) {
      return this.filteredReviewsList = this.reviewsList
    }

    this.filteredReviewsList = this.filters.stars.reduce((accumulator, star) => {
      return [
        ...accumulator,
        ...this.reviewsList.filter((review) => review.stars === star)
      ]
    }, [])
  }

  filterSearchParameter() {
    if (this.filters.search.length === 0) return

    this.filteredReviewsList = this.filteredReviewsList.filter((review) => {
      return review.title
        .toUpperCase()
        .indexOf(this.filters.search.toUpperCase()) > -1
    })
  }

  orderReviews() {
    if (!this.filters.order) return

    this.filteredReviewsList = this.filteredReviewsList.sort((a, b) => {
      // eslint-disable-next-line
      return eval(`${a.reviewCreated}${this.filters.order}${b.reviewCreated}`)
    })
  }

  groupBy() {
    if (!this.filters.groupBy) return

    const formatted = this.filteredReviewsList.map(elem => {
      return { date: moment(elem.reviewCreated).startOf(this.filters.groupBy).format('YYYY-MM-DD'), review: elem }
    })
    const dates = formatted.map(elem => elem.date)
    const uniqueDates = dates.filter((date, index) => dates.indexOf(date) === index)

    this.filteredReviewsList = uniqueDates.map(date => {
      const reviews = formatted.filter(elem => elem.date === date)
      return { date, reviews }
    })
  }
}
