import React from 'react'
import renderer from 'react-test-renderer'

import ReviewItem from './index'
import ReviewMock from './__mocks__/__mock__review'

import { Theme } from 'luna-ui-lib'

describe('<ReviewItem />', () => {
  it('toMatchSnapshot: Load <ReviewItem /> component', () => {
    const component = <Theme><ReviewItem review={ReviewMock}/></Theme>

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
