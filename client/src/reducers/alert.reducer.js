import { alertConstants } from "../constants/alert.constants";

export default function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      console.log(alertConstants.SUCCESS + action.type);
      return {
        type: "alert-success",
        message: action.message
      };
    case alertConstants.ERROR:
      console.log(alertConstants.ERROR + action.type);
      return {
        type: "alert-danger",
        message: action.message
      };
    case alertConstants.CLEAR:
      console.log(alertConstants.CLEAR + action.type);
      return {};
    default:
      return state;
  }
}
