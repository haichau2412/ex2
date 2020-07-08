import { fetchFakeAuth, fetchFakeSignUp } from "../../service/fakeAuth";

export const login = "LOG_IN";
export const signup = "SIGN_UP";
export const authenticating = "AUTHENTICATING";
export const onSuccess = "SUCCESS";
export const onFailure = "FAILURE";
export const logout = "LOG_OUT";

const setAuthenticating = ({ username }) => {
  return {
    type: "AUTHENTICATING",
    payload: {
      isAuthenticating: true,
      currentUser: username,
    },
  };
};

const success = () => {
  return {
    type: "SUCCESS",
    payload: {
      isAuthenticating: false,
      authenticated: true,
    },
  };
};

const failure = () => {
  return {
    type: "FAILURE",
    payload: {
      isAuthenticating: false,
      authenticated: false,
      currentUser: "",
    },
  };
};

const addNewUser = (data) => {
  return {
    type: "ADD_NEW_USER",
    payload: {
      ...data,
    },
  };
};

export const sendLoginRequest = (authInfo) => {
  console.log(authInfo);
  return async (dispatch, getState) => {
    dispatch(setAuthenticating({ ...authInfo }));
    try {
      await fetchFakeAuth(getState().usr.users, { ...authInfo });
      return dispatch(success());
    } catch (e) {
      return dispatch(failure());
    }
  };
};

export const sendSignupRequest = (authInfo) => {
  console.log(authInfo);
  return async (dispatch, getState) => {
    dispatch(setAuthenticating({ ...authInfo }));
    try {
      await fetchFakeSignUp(getState().usr.users, { ...authInfo });
      return (function () {
        dispatch(success());
        dispatch(addNewUser(authInfo));
      })();
    } catch (e) {
      return dispatch(failure());
    }
  };
};

export const sendRequest = {
  login: sendLoginRequest,
  signup: sendSignupRequest,
};
