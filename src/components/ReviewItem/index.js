import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Area, Hint, Image as ProductImage } from 'luna-ui-lib'

import './styles.css'

export default class Reviews extends PureComponent {
  static propTypes = {
    review: PropTypes.object
  }

  render() {
    return (
      <Area className="arw_reviews__item">
        <header className="arw_reviews__item_header">
          <ProductImage
            fit
            shadow
            width="80px"
            height="80px"
            className="arw_reviews__item_image"
            src={`https://images-na.ssl-images-amazon.com/images/I/${this.props.review.productImg}._SY679_.jpg`}
          />

          <div className="arw_reviews__item_info">
            <Hint className="arw_reviews__item_info__title">date</Hint>
            <strong>{this.props.review.created}</strong>
          </div>

          <div className="arw_reviews__item_info">
            <Hint className="arw_reviews__item_info__title">stars</Hint>
            <strong>{this.props.review.stars} ★★★★</strong>
          </div>

          <div className="arw_reviews__item_info">
            <Hint className="arw_reviews__item_info__title">{this.props.review.reviewId}</Hint>
            <strong className="arw_reviews__item_name">{this.props.review.productTitle}</strong>
          </div>
        </header>
        <h4 className="arw_reviews__title"><strong>{this.props.review.title}</strong></h4>
        <p>{this.props.review.content}</p>
      </Area>
    )
  }
}
