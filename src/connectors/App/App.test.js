import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

import App from './index'
import DEFAULT_STAR_RATING from 'constants/DEFAULT_STAR_RATING'

it('renders without crashing', () => {
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
  const div = document.createElement('div')
  global.scrollTo = jest.fn()

  ReactDOM.render(<App store={store} history={{}}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
