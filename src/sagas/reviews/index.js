import axios from 'axios'
import { takeLatest, put, call } from 'redux-saga/effects'

import { reviews, REVIEWS } from 'actions/reviews'

const REQUEST_URL = 'https://sellics-frontend-test.herokuapp.com/reviews'

function fetchReviews(url) {
  return axios.request({
    url,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function* fetchReviewsSaga(action) {
  try {
    yield put(reviews.fetch.loading(true))

    const reviewsRequest = yield call(fetchReviews, `https://cors-anywhere.herokuapp.com/${REQUEST_URL}/${action.page}`)

    yield put(reviews.fetch.success(reviewsRequest.data))
  } catch (error) {
    yield put(reviews.fetch.failure(error, `Error when loading page: ${action.page}`))
  } finally {
    yield put(reviews.fetch.loading(false))
  }
}

export default function* watchReviews() {
  yield takeLatest(REVIEWS.FETCH.REQUEST, fetchReviewsSaga)
}