/* eslint-disable global-require */
/* eslint-disable import/no-self-import */
import { combineReducers } from "redux";
import { reducer as place } from "~/redux/placeDux";

export const rootReducer = combineReducers({
  place
});

export default rootReducer;
