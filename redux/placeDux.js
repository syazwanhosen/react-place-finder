import autodux from "autodux";

const initialState = {
  error: false,
  loading: false,
  predictions: [],
  result: []
};

export const {
  reducer,
  initial,
  slice,
  actions: {
    getPlaceRequest,
    getPlaceSuccess,
    getPlaceFailure,
    getPlaceDetailsRequest,
    getPlaceDetailsSuccess,
    getPlaceDetailsFailure
  }
} = autodux({
  slice: "place",
  initial: initialState,
  actions: {
    getPlaceRequest: state => ({ ...state, loading: true }),
    getPlaceSuccess: (state, payload) => ({
      ...state,
      predictions: [...payload],
      loading: false
    }),
    getPlaceFailure: state => ({
      ...state,
      error: true,
      loading: false
    }),
    getPlaceDetailsRequest: state => ({ ...state, loading: true }),
    getPlaceDetailsSuccess: (state, payload) => ({
      ...state,
      result: [...state.result, ...payload],
      loading: false
    }),
    getPlaceDetailsFailure: state => ({
      ...state,
      error: true,
      loading: false
    })
  }
});
