import { fetchFakeAuth, fetchFakeSignUp } from "../../service/fakeAuth";

export const login = "LOG_IN";
export const signup = "SIGN_UP";
export const authenticating = "AUTHENTICATING";
export const onSuccess = "SUCCESS";
export const onFailure = "FAILURE";
export const logout = "LOG_OUT";
export const resetError = "RESET_ERROR";

const setAuthenticating = ({ username }) => {
  return {
    type: "AUTHENTICATING",
    payload: {
      isAuthenticating: true,
      currentUser: username,
    },
  };
};

const success = (id) => {
  return {
    type: "SUCCESS",
    payload: {
      isAuthenticating: false,
      authenticated: true,
      currentUserId: id,
    },
  };
};

const failure = (error) => {
  return {
    type: "FAILURE",
    payload: {
      isAuthenticating: false,
      authenticated: false,
      currentUser: "",
      currentUserId: "",
      error,
    },
  };
};

const addUserFromServer = (data) => {
  return {
    type: "ADD_NEW_USER_FROM_SERVER",
    payload: {
      data,
    },
  };
};

export const sendLoginRequest = ({ values: authInfo, callback }) => {
  return async (dispatch, getState) => {
    dispatch(setAuthenticating({ ...authInfo }));
    try {
      const resp = await fetchFakeAuth(getState().usr.users, { ...authInfo });
      callback();
      return dispatch(success(resp.id));
    } catch (error) {
      callback();
      return dispatch(failure(error));
    }
  };
};

export const sendSignupRequest = ({ values: authInfo, callback }) => {
  return async (dispatch, getState) => {
    dispatch(setAuthenticating({ ...authInfo }));
    try {
      const resp = await fetchFakeSignUp(getState().usr.users, authInfo);
      callback();
      return (function () {
        dispatch(success(resp.newUser.id));
        dispatch(addUserFromServer(resp.newUser));
      })();
    } catch (error) {
      callback();
      return dispatch(failure(error));
    }
  };
};

export const sendRequest = {
  login: sendLoginRequest,
  signup: sendSignupRequest,
};
