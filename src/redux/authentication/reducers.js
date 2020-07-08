import * as actionTypes from "./actions";
import { initialState } from "./ultilities";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.authenticating: {
      return {
        ...state,
        ...action.payload,
        error: "",
      };
    }
    case actionTypes.onSuccess:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.onFailure:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.logout:
      return {
        ...state,
        authenticated: false,
        currentUser: "",
        error: "",
      };
    case actionTypes.resetError:
      return {
        ...state,
        error: "",
      };

    default:
      return state;
  }
};

export default reducers;
