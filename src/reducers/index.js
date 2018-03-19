import { combineReducers } from 'redux';
import users from './users';

// export function reducers(state,action) {
//     // no action passed, just show default state
//     return state;
// }

export const reducers = combineReducers({
    users: users
})