import { combineReducers } from "redux";
import alerts from "./alert.reducer";
import users from "./users.reducers";

// export function reducers(state,action) {
//     // no action passed, just show default state
//     return state;
// }

export const reducers = combineReducers({
  alerts,
  users
});
