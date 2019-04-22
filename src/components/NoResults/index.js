import React from 'react'
import { Area } from 'luna-ui-lib'

import './styles.css'

export default function NoResults(props) {
  return (
    <Area className="arw_reviews__no_results">
      <strong>No reviews found <span role="img" aria-label="sad face">😢</span></strong>
    </Area>
  )
}
