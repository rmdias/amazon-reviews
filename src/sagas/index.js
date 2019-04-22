import { fork, all } from 'redux-saga/effects'

import reviewsSaga from './reviews'

export default function* root() {
  yield all([
    fork(reviewsSaga)
  ])
}