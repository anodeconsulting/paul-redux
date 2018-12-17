import { userConstants } from "../constants/user.constants";

export default function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      console.log(userConstants.GETALL_REQUEST + action.type);
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      console.log(userConstants.GETALL_SUCCESS + action.type);

      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      console.log(userConstants.GETALL_FAILURE + action.type);

      return {
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      console.log(userConstants.DELETE_REQUEST + action.type);

      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id ? { ...user, deleting: true } : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };

    case userConstants.USERS_ADDPLAN_REQUEST:
      return {};

    case userConstants.USERS_ADDPLAN_SUCCESS:
      return {};

    case userConstants.USERS_ADDPLAN_FAILURE:
      return {};

    case userConstants.USERS_UPDATEPLAN_REQUEST:
      return {};

    case userConstants.USERS_UPDATEPLAN_SUCCESS:
      return {};

    case userConstants.USERS_UPDATEPLAN_FAILURE:
      return {};

    default:
      return state;
  }
}
