import { userConstants } from "../constants/user.constants";
import { userService } from "../services/user.service";
import { alertActions } from "./alert.actions";
import { history } from "../helpers/history";

export const userActions = {
  login,
  logout
};

function login(email, password) {
  return dispatch => {
    console.log(email + "-" + password);
    dispatch(request({ email }));

    userService.login(email, password).then(
      user => {
        console.log(user);
        dispatch(success(user));
        history.push("/msfui");
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  console.log("entering logout");
  userService.logout();
  return { type: userConstants.LOGOUT };
}
