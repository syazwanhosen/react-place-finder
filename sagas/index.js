import { takeLatest, all } from "redux-saga/effects";
import API from "~/services/fetcher";
import fixtureApi from "~/fixtures/fetcher";
import debugConfig from "~/config/debugConfig";

/* ------------- Types ------------- */
import {
  getPlaceRequest as getPlaceType,
  getPlaceDetailsRequest as getPlaceDetailsDetailsType
} from "~/redux/placeDux";

/* ------------- Sagas ------------- */
import { getPlace, getPlaceDetails } from "./placeSaga";

/* ------------- API ------------- */
const api = debugConfig.useFixtures ? fixtureApi.create() : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([takeLatest(getPlaceType.type, getPlace, api)]);
  yield all([
    takeLatest(getPlaceDetailsDetailsType.type, getPlaceDetails, api)
  ]);
}
