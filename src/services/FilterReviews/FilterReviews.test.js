import FilterReviews from './index'
import DEFAULT_STAR_RATING from 'constants/DEFAULT_STAR_RATING'

// Mocks
import ReviewsMock from './__mocks__/__mock__reviews'

let filterParameters
beforeEach(() => {
  filterParameters = {
    search: '',
    groupBy: 'day',
    order: null,
    stars: [ DEFAULT_STAR_RATING ],
    loading: false
  }
})

describe('No filters', () => {
  it('should load the reviews without any filters', () => {
    const filterOutput = new FilterReviews(filterParameters, [])

    expect(filterOutput).toEqual([])
  })
})

describe('Filter by: stars', () => {
  it('should filter by 5 stars and return 1 review', () => {
    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput[0].reviews.length).toBe(1)
    expect(filterOutput[0].reviews[0].review.stars).toBe(5)
  })
})

describe('Filter by: search', () => {
  it('should return no reviews', () => {
    filterParameters.search = 'PS 4'
    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput).toEqual([])
  })

  it('should search by `review title` and bring the exact review', () => {
    const searchParameter = 'Nice rattle sound'

    filterParameters.search = searchParameter
    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput[0].reviews.length).toBe(1)
    expect(filterOutput[0].reviews[0].review.title).toBe(searchParameter)
  })

  it('should search by `review title` and bring the 2 reviews with the `searchParameter` in the title', () => {
    const searchParameter = 'nice'
    filterParameters.search = searchParameter
    filterParameters.groupBy = 'month'
    filterParameters.stars = [5, 3]

    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput[0].reviews.length).toBe(2)
  })
})

describe('Order by', () => {
  it('should return reviews ordered by newest', () => {
    filterParameters.stars = [5, 3, 4]
    filterParameters.order = ''

    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput[0].reviews[0].date).toEqual('2018-02-07')
    expect(filterOutput[1].reviews[0].date).toEqual('2017-11-08')
  })

  it('should return reviews ordered by oldest', () => {
    filterParameters.stars = [5, 3, 4]
    filterParameters.order = '-'

    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput[0].reviews[0].date).toEqual('2017-11-08')
    expect(filterOutput[3].reviews[0].date).toEqual('2018-02-07')
  })
})

describe('Group by', () => {
  it('should return reviews grouped by: day', () => {
    filterParameters.stars = [5, 3, 4]

    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput[0].reviews.length).toBe(2)
    expect(filterOutput[1].reviews.length).toBe(1)
  })

  it('should return reviews grouped by: week', () => {
    filterParameters.stars = [5, 3, 4]
    filterParameters.groupBy = 'week'

    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput[0].reviews.length).toBe(2)
    expect(filterOutput[1].reviews.length).toBe(3)
  })

  it('should return reviews grouped by: month', () => {
    filterParameters.stars = [5, 3, 4]
    filterParameters.groupBy = 'month'

    const filterOutput = new FilterReviews(filterParameters, ReviewsMock)

    expect(filterOutput[0].reviews.length).toBe(2)
    expect(filterOutput[1].reviews.length).toBe(3)
  })
})
