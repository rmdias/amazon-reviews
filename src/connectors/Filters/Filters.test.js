import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

import Filters from './index'
import DEFAULT_STAR_RATING from 'constants/DEFAULT_STAR_RATING'

import { Theme } from 'luna-ui-lib'

const initialState = {
  filters: {
    search: '',
    groupBy: 'day',
    order: null,
    stars: [ DEFAULT_STAR_RATING ],
    loading: false
  }
}
const store = mockStore(initialState)
const component = <Theme><Filters store={store}/></Theme>

describe('<Filters />', () => {
  it('toMatchSnapshot: Load <Filters />', () => {
    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
