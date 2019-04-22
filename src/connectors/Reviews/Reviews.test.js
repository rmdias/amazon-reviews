import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

import Reviews from './index'
import DEFAULT_STAR_RATING from 'constants/DEFAULT_STAR_RATING'
import ReviewsMock from './__mocks__/__mock__reviews'

import { Theme } from 'luna-ui-lib'

const filters = {
  search: '',
  groupBy: 'day',
  order: null,
  stars: [ DEFAULT_STAR_RATING ],
  loading: false
}

beforeEach(() => {
  global.scrollTo = jest.fn()
})

describe('<Reviews />', () => {
  it('toMatchSnapshot: Loading', () => {
    const initialState = { filters }
    const store = mockStore(initialState)
    const component = <Theme><Reviews store={store}/></Theme>

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('toMatchSnapshot: Load <ReviewItems /> as list', () => {
    const initialState = {
      filters,
      reviews: {
        list: ReviewsMock,
        hasMore: false,
        loading: false
      }
    }
    const store = mockStore(initialState)
    const component = <Theme><Reviews store={store}/></Theme>

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
