/* eslint-disable import/prefer-default-export */
import { put, call } from "redux-saga/effects";
import {
  getPlaceSuccess,
  getPlaceFailure,
  getPlaceDetailsSuccess,
  getPlaceDetailsFailure
} from "~/redux/placeDux";

export function* getPlace(api, { input }) {
  try {
    const response = yield call(api.getPlace, input);

    if (!response.ok) throw new Error(error);

    yield put(getPlaceSuccess(response.data));
  } catch (error) {
    yield put(getPlaceFailure(error.message ?? "Something is wrong"));
  }
}

export function* getPlaceDetails(api, { placeId }) {
  try {
    const response = yield call(api.getPlaceDetails, placeId);

    if (!response.ok) throw new Error(error);

    yield put(getPlaceDetailsSuccess(response.data));
  } catch (error) {
    yield put(getPlaceDetailsFailure(error.message ?? "Something is wrong"));
  }
}
